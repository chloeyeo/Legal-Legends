import React from 'react';
import { Achievement } from '../types/game';
import { Trophy, Star, Crown, Skull } from 'lucide-react';

interface RecentAchievementsProps {
  achievements: Achievement[];
}

export const RecentAchievements: React.FC<RecentAchievementsProps> = ({ achievements }) => {
  const recentAchievements = achievements.slice(-3).reverse();

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'from-gray-500 to-gray-700';
      case 'Rare': return 'from-blue-500 to-cyan-600';
      case 'Epic': return 'from-purple-500 to-violet-600';
      case 'Legendary': return 'from-yellow-500 to-amber-600';
      default: return 'from-gray-500 to-gray-700';
    }
  };

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case 'Common': return Star;
      case 'Rare': return Trophy;
      case 'Epic': return Crown;
      case 'Legendary': return Skull;
      default: return Star;
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'border-gray-500/30';
      case 'Rare': return 'border-blue-500/30';
      case 'Epic': return 'border-purple-500/30';
      case 'Legendary': return 'border-yellow-500/30';
      default: return 'border-gray-500/30';
    }
  };

  // Mock achievements if none exist
  const mockAchievements = [
    {
      id: '1',
      title: 'Dark Initiate',
      description: 'Entered the Dark Courts for the first time',
      icon: '🔥',
      rarity: 'Common' as const,
      unlockedAt: new Date(),
    },
    {
      id: '2',
      title: 'Shadow Scholar',
      description: 'Completed your first forbidden research',
      icon: '📚',
      rarity: 'Rare' as const,
      unlockedAt: new Date(),
    },
  ];

  const displayAchievements = achievements.length > 0 ? recentAchievements : mockAchievements;

  return (
    <div className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm border border-yellow-600/30 rounded-2xl shadow-2xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Trophy className="h-6 w-6 text-yellow-400" />
        <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
          DARK DEEDS
        </h3>
      </div>

      <div className="space-y-4">
        {displayAchievements.map((achievement) => {
          const Icon = getRarityIcon(achievement.rarity);
          return (
            <div
              key={achievement.id}
              className={`flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-xl border ${getRarityBorder(achievement.rarity)} hover:scale-105 transition-all`}
            >
              <div className={`bg-gradient-to-br ${getRarityColor(achievement.rarity)} p-3 rounded-xl shadow-lg`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-white truncate">
                  {achievement.title}
                </h4>
                <p className="text-xs text-gray-400 truncate">
                  {achievement.description}
                </p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-bold mt-2 border ${
                  achievement.rarity === 'Common' ? 'bg-gray-900/50 text-gray-300 border-gray-500/30' :
                  achievement.rarity === 'Rare' ? 'bg-blue-900/50 text-blue-300 border-blue-500/30' :
                  achievement.rarity === 'Epic' ? 'bg-purple-900/50 text-purple-300 border-purple-500/30' :
                  'bg-yellow-900/50 text-yellow-300 border-yellow-500/30'
                }`}>
                  {achievement.rarity.toUpperCase()}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <button className="text-sm text-yellow-400 hover:text-yellow-300 font-bold transition-colors">
          View All Dark Deeds →
        </button>
      </div>
    </div>
  );
};