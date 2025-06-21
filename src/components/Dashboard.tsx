import React from 'react';
import { Header } from './Header';
import { GameModeCard } from './GameModeCard';
import { StatsPanel } from './StatsPanel';
import { RecentAchievements } from './RecentAchievements';
import { Leaderboard } from './Leaderboard';
import { LegalAvatar, GameMode } from '../types/game';
import { Sword, Shield, BookOpen, Target, Skull, Crown } from 'lucide-react';

interface DashboardProps {
  avatar: LegalAvatar;
  onViewProfile: () => void;
  onSelectMode: (mode: GameMode) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ avatar, onViewProfile, onSelectMode }) => {
  const gameModes: GameMode[] = [
    {
      id: 'courtroom',
      title: 'The Crimson Courtroom',
      description: 'Face the Shadow Judge in trials that test your very soul. Each case is a battle for justice in the darkest corners of law.',
      icon: '⚖️',
      difficulty: 4,
      xpReward: 250,
      goldReward: 50,
      requiredLevel: 1,
      isUnlocked: true,
      questType: 'story',
    },
    {
      id: 'negotiation',
      title: 'Devil\'s Bargain Arena',
      description: 'Enter the realm where words are weapons and contracts are forged in shadow. Master the art of dark negotiation.',
      icon: '🤝',
      difficulty: 3,
      xpReward: 200,
      goldReward: 40,
      requiredLevel: 1,
      isUnlocked: true,
      questType: 'challenge',
    },
    {
      id: 'research',
      title: 'Forbidden Library',
      description: 'Delve into ancient tomes and cursed precedents. Uncover secrets that lesser lawyers fear to seek.',
      icon: '📚',
      difficulty: 2,
      xpReward: 150,
      goldReward: 30,
      requiredLevel: 1,
      isUnlocked: true,
      questType: 'story',
    },
    {
      id: 'challenges',
      title: 'Trial by Fire',
      description: 'Face the ultimate tests of legal prowess. Only the worthy shall emerge victorious from these burning challenges.',
      icon: '🔥',
      difficulty: 5,
      xpReward: 300,
      goldReward: 75,
      requiredLevel: 3,
      isUnlocked: avatar.level >= 3,
      questType: 'challenge',
    },
    {
      id: 'ethics',
      title: 'The Moral Abyss',
      description: 'Navigate the treacherous waters of ethical dilemmas where right and wrong blur into shadow.',
      icon: '⚡',
      difficulty: 6,
      xpReward: 400,
      goldReward: 100,
      requiredLevel: 5,
      isUnlocked: avatar.level >= 5,
      questType: 'story',
    },
    {
      id: 'masterclass',
      title: 'The Final Judgment',
      description: 'Face the ultimate boss battle. The Dark Lord of Law awaits only the most legendary champions.',
      icon: '👑',
      difficulty: 8,
      xpReward: 500,
      goldReward: 200,
      requiredLevel: 10,
      isUnlocked: avatar.level >= 10,
      questType: 'boss',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black">
      <Header avatar={avatar} onViewProfile={onViewProfile} />
      
      <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-black/80 via-purple-900/80 to-black/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 mb-6 sm:mb-8 border border-yellow-600/30 shadow-2xl relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent mb-3 sm:mb-4">
                Welcome, {avatar.name} 🔥
              </h1>
              <p className="text-gray-300 text-base sm:text-lg mb-2">
                <span className="text-yellow-400 font-semibold">Level {avatar.level}</span> {avatar.specialization} of the Dark Courts
              </p>
              <p className="text-purple-300 text-sm sm:text-base">Your legend grows stronger with each victory...</p>
            </div>
            <div className="flex flex-row lg:flex-col items-center space-x-6 lg:space-x-0 lg:space-y-4 w-full lg:w-auto justify-between lg:justify-start">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">{avatar.xp}</div>
                <div className="text-xs text-yellow-300 font-semibold">SOUL POWER</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">{avatar.achievements.length}</div>
                <div className="text-xs text-purple-300 font-semibold">DARK DEEDS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-400">{avatar.gold}</div>
                <div className="text-xs text-amber-300 font-semibold">CURSED GOLD</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="xl:col-span-3 space-y-6 sm:space-y-8">
            {/* Stats Panel */}
            <StatsPanel avatar={avatar} />

            {/* Game Modes */}
            <div>
              <div className="flex items-center space-x-4 mb-6 sm:mb-8">
                <Sword className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  CHOOSE YOUR DESTINY
                </h2>
                <div className="flex-1 h-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {gameModes.map((mode) => (
                  <GameModeCard
                    key={mode.id}
                    mode={mode}
                    onClick={() => onSelectMode(mode)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <RecentAchievements achievements={avatar.achievements} />
            <Leaderboard currentUser={avatar} />
          </div>
        </div>
      </main>
    </div>
  );
};