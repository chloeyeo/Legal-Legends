import React from 'react';
import { LegalAvatar, LeaderboardEntry } from '../types/game';
import { Crown, Trophy, Skull, Flame } from 'lucide-react';

interface LeaderboardProps {
  currentUser: LegalAvatar;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ currentUser }) => {
  // Mock leaderboard data with dark theme
  const leaderboardData: LeaderboardEntry[] = [
    {
      rank: 1,
      name: 'Shadowbane Alexandra',
      level: 15,
      xp: 3450,
      specialization: 'Corporate Warlock',
      achievements: 28,
    },
    {
      rank: 2,
      name: 'Darkblade Marcus',
      level: 13,
      xp: 2800,
      specialization: 'Shadow Defender',
      achievements: 24,
    },
    {
      rank: 3,
      name: 'Voidwhisper Sarah',
      level: 12,
      xp: 2350,
      specialization: 'Court Paladin',
      achievements: 21,
    },
    {
      rank: 4,
      name: currentUser.name,
      level: currentUser.level,
      xp: currentUser.xp,
      specialization: currentUser.specialization,
      achievements: currentUser.achievements.length,
    },
    {
      rank: 5,
      name: 'Soulreaper David',
      level: 9,
      xp: 1450,
      specialization: 'Harmony Sage',
      achievements: 15,
    },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-5 w-5 text-yellow-400" />;
      case 2: return <Trophy className="h-5 w-5 text-gray-300" />;
      case 3: return <Skull className="h-5 w-5 text-amber-600" />;
      default: return <span className="text-sm font-bold text-gray-400">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number, isCurrentUser: boolean) => {
    if (isCurrentUser) return 'bg-gradient-to-r from-purple-900/50 to-violet-900/50 border-purple-500/30';
    if (rank <= 3) return 'bg-gradient-to-r from-yellow-900/30 to-amber-900/30 border-yellow-500/30';
    return 'bg-gradient-to-r from-gray-900/50 to-black/50 border-gray-700/30';
  };

  return (
    <div className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm border border-yellow-600/30 rounded-2xl shadow-2xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Flame className="h-6 w-6 text-red-400" />
        <h3 className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          HALL OF LEGENDS
        </h3>
      </div>

      <div className="space-y-3">
        {leaderboardData.map((entry) => {
          const isCurrentUser = entry.name === currentUser.name;
          return (
            <div
              key={entry.rank}
              className={`flex items-center space-x-4 p-4 border rounded-xl transition-all hover:scale-105 ${getRankBg(entry.rank, isCurrentUser)}`}
            >
              <div className="flex items-center justify-center w-10">
                {getRankIcon(entry.rank)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className={`text-sm font-bold truncate ${
                    isCurrentUser ? 'text-purple-300' : 'text-white'
                  }`}>
                    {entry.name} {isCurrentUser && '(You)'}
                  </h4>
                  <span className="text-xs text-yellow-400 ml-2 font-bold">
                    Lv.{entry.level}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-400 truncate">
                    {entry.specialization}
                  </span>
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    <span className="text-purple-400">{entry.xp} XP</span>
                    <span>•</span>
                    <span className="text-yellow-400">{entry.achievements} 🏆</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <button className="text-sm text-red-400 hover:text-red-300 font-bold transition-colors">
          View Full Hall of Legends →
        </button>
      </div>
    </div>
  );
};