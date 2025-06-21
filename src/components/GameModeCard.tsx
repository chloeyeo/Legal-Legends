import React from 'react';
import { Lock, Star, Trophy, Skull, Crown, Flame } from 'lucide-react';
import { GameMode } from '../types/game';

interface GameModeCardProps {
  mode: GameMode;
  onClick: () => void;
}

export const GameModeCard: React.FC<GameModeCardProps> = ({ mode, onClick }) => {
  const getRarityColor = (difficulty: number) => {
    if (difficulty <= 2) return 'from-green-500 to-emerald-600';
    if (difficulty <= 4) return 'from-blue-500 to-cyan-600';
    if (difficulty <= 6) return 'from-purple-500 to-violet-600';
    return 'from-red-500 to-orange-600';
  };

  const getQuestTypeIcon = (questType: string) => {
    switch (questType) {
      case 'boss': return Crown;
      case 'challenge': return Flame;
      default: return Skull;
    }
  };

  const getQuestTypeBorder = (questType: string) => {
    switch (questType) {
      case 'boss': return 'border-yellow-500/50 shadow-yellow-500/30';
      case 'challenge': return 'border-red-500/50 shadow-red-500/30';
      default: return 'border-purple-500/50 shadow-purple-500/30';
    }
  };

  const getDifficultyStars = (difficulty: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 sm:h-4 sm:w-4 ${
          i < difficulty ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  const QuestIcon = getQuestTypeIcon(mode.questType);

  return (
    <div 
      className={`relative bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-2xl ${
        mode.isUnlocked 
          ? `${getQuestTypeBorder(mode.questType)} hover:shadow-2xl` 
          : 'border-gray-700/50 opacity-60 cursor-not-allowed'
      }`}
      onClick={mode.isUnlocked ? onClick : undefined}
    >
      {!mode.isUnlocked && (
        <div className="absolute inset-0 bg-black/70 rounded-xl sm:rounded-2xl flex items-center justify-center z-10">
          <div className="text-center text-gray-300">
            <Lock className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-2 sm:mb-3" />
            <p className="text-sm font-bold">Level {mode.requiredLevel} Required</p>
            <p className="text-xs text-gray-400">Prove your worth first</p>
          </div>
        </div>
      )}

      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <div className={`bg-gradient-to-br ${getRarityColor(mode.difficulty)} p-3 sm:p-4 rounded-xl shadow-lg`}>
            <div className="text-white text-2xl sm:text-3xl">{mode.icon}</div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 mb-2">
              {getDifficultyStars(mode.difficulty)}
            </div>
            <div className="flex items-center text-yellow-400 text-xs sm:text-sm font-bold mb-1">
              <Trophy className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              {mode.xpReward} XP
            </div>
            <div className="flex items-center text-amber-400 text-xs sm:text-sm font-bold">
              <span className="mr-1">💰</span>
              {mode.goldReward} Gold
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <QuestIcon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white">{mode.title}</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">{mode.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold border ${
            mode.difficulty <= 2 
              ? 'bg-green-900/50 text-green-300 border-green-500/30'
              : mode.difficulty <= 4
              ? 'bg-blue-900/50 text-blue-300 border-blue-500/30'
              : mode.difficulty <= 6
              ? 'bg-purple-900/50 text-purple-300 border-purple-500/30'
              : 'bg-red-900/50 text-red-300 border-red-500/30'
          }`}>
            {mode.difficulty <= 2 ? 'NOVICE' : 
             mode.difficulty <= 4 ? 'ADEPT' :
             mode.difficulty <= 6 ? 'MASTER' : 'LEGENDARY'}
          </span>
          
          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold border ${
            mode.questType === 'boss' 
              ? 'bg-yellow-900/50 text-yellow-300 border-yellow-500/30'
              : mode.questType === 'challenge'
              ? 'bg-red-900/50 text-red-300 border-red-500/30'
              : 'bg-purple-900/50 text-purple-300 border-purple-500/30'
          }`}>
            {mode.questType.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};