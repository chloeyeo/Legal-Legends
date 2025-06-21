import React, { useState, useEffect } from 'react';
import { AvatarCreation } from './components/AvatarCreation';
import { Dashboard } from './components/Dashboard';
import { GameMode } from './components/GameMode';
import { LegalAvatar, GameMode as GameModeType } from './types/game';

type AppState = 'creation' | 'dashboard' | 'gamemode';

function App() {
  const [appState, setAppState] = useState<AppState>('creation');
  const [avatar, setAvatar] = useState<LegalAvatar | null>(null);
  const [selectedMode, setSelectedMode] = useState<GameModeType | null>(null);

  // Load saved avatar from localStorage
  useEffect(() => {
    const savedAvatar = localStorage.getItem('legalLegends_avatar');
    if (savedAvatar) {
      const parsedAvatar = JSON.parse(savedAvatar);
      // Ensure new properties exist
      if (!parsedAvatar.health) parsedAvatar.health = 100;
      if (!parsedAvatar.maxHealth) parsedAvatar.maxHealth = 100;
      if (!parsedAvatar.mana) parsedAvatar.mana = 50;
      if (!parsedAvatar.maxMana) parsedAvatar.maxMana = 50;
      if (!parsedAvatar.gold) parsedAvatar.gold = 100;
      
      setAvatar(parsedAvatar);
      setAppState('dashboard');
    }
  }, []);

  const handleAvatarCreated = (newAvatar: LegalAvatar) => {
    setAvatar(newAvatar);
    localStorage.setItem('legalLegends_avatar', JSON.stringify(newAvatar));
    setAppState('dashboard');
  };

  const handleModeSelected = (mode: GameModeType) => {
    setSelectedMode(mode);
    setAppState('gamemode');
  };

  const handleGameComplete = (xpGained: number, goldGained: number = 0) => {
    if (avatar) {
      const updatedAvatar = {
        ...avatar,
        xp: avatar.xp + xpGained,
        gold: avatar.gold + goldGained,
      };
      
      // Level up check
      if (updatedAvatar.xp >= updatedAvatar.xpToNext) {
        updatedAvatar.level += 1;
        updatedAvatar.xp = updatedAvatar.xp - updatedAvatar.xpToNext;
        updatedAvatar.xpToNext = updatedAvatar.level * 150; // Scaling XP requirement
        
        // Increase skills slightly on level up
        Object.keys(updatedAvatar.skills).forEach(skill => {
          updatedAvatar.skills[skill as keyof typeof updatedAvatar.skills] = Math.min(
            100,
            updatedAvatar.skills[skill as keyof typeof updatedAvatar.skills] + Math.floor(Math.random() * 8) + 2
          );
        });

        // Restore health and mana on level up
        updatedAvatar.health = updatedAvatar.maxHealth;
        updatedAvatar.mana = updatedAvatar.maxMana;
      }
      
      setAvatar(updatedAvatar);
      localStorage.setItem('legalLegends_avatar', JSON.stringify(updatedAvatar));
    }
    setAppState('dashboard');
  };

  const handleViewProfile = () => {
    // For now, just stay on dashboard
    // Could implement profile modal or separate profile page
  };

  const handleBackToDashboard = () => {
    setAppState('dashboard');
    setSelectedMode(null);
  };

  if (appState === 'creation') {
    return <AvatarCreation onComplete={handleAvatarCreated} />;
  }

  if (appState === 'gamemode' && selectedMode && avatar) {
    return (
      <GameMode
        mode={selectedMode}
        avatar={avatar}
        onBack={handleBackToDashboard}
        onComplete={handleGameComplete}
      />
    );
  }

  if (appState === 'dashboard' && avatar) {
    return (
      <Dashboard
        avatar={avatar}
        onViewProfile={handleViewProfile}
        onSelectMode={handleModeSelected}
      />
    );
  }

  return null;
}

export default App;