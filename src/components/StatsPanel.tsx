import React from 'react';
import { LegalAvatar } from '../types/game';
import { Sword, Shield, BookOpen, Crown, Scroll, Scale } from 'lucide-react';

interface StatsPanelProps {
  avatar: LegalAvatar;
}

export const StatsPanel: React.FC<StatsPanelProps> = ({ avatar }) => {
  const skillIcons = {
    advocacy: Sword,
    research: BookOpen,
    negotiation: Crown,
    ethics: Scale,
    drafting: Scroll,
  };

  const skillNames = {
    advocacy: 'Blade of Truth',
    research: 'Ancient Wisdom',
    negotiation: 'Silver Tongue',
    ethics: 'Moral Compass',
    drafting: 'Quill of Power',
  };

  const getSkillColor = (value: number) => {
    if (value >= 80) return 'from-green-500 to-emerald-600';
    if (value >= 60) return 'from-blue-500 to-cyan-600';
    if (value >= 40) return 'from-yellow-500 to-amber-600';
    return 'from-red-500 to-orange-600';
  };

  const getSkillRank = (value: number) => {
    if (value >= 80) return 'MASTER';
    if (value >= 60) return 'ADEPT';
    if (value >= 40) return 'APPRENTICE';
    return 'NOVICE';
  };

  return (
    <div className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm border border-yellow-600/30 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8">
      <div className="flex items-center space-x-4 mb-6 sm:mb-8">
        <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          DARK POWERS
        </h2>
        <div className="flex-1 h-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {Object.entries(avatar.skills).map(([skill, value]) => {
          const Icon = skillIcons[skill as keyof typeof skillIcons];
          const skillName = skillNames[skill as keyof typeof skillNames];
          return (
            <div key={skill} className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-yellow-500/30 transition-all">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4">
                <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 p-2 sm:p-3 rounded-xl border border-yellow-500/30">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-bold text-yellow-400 block">
                    {skillName}
                  </span>
                  <span className="text-xs text-gray-400">
                    {getSkillRank(value)}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl sm:text-2xl font-bold text-white">{value}</span>
                  <span className="text-xs text-gray-400">/100</span>
                </div>
                
                <div className="w-full bg-gray-800 rounded-full h-2 sm:h-3 border border-gray-700">
                  <div 
                    className={`h-2 sm:h-3 rounded-full transition-all duration-1000 bg-gradient-to-r ${getSkillColor(value)}`}
                    style={{ width: `${value}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* XP Progress */}
      <div className="bg-gradient-to-r from-purple-900/50 to-violet-900/50 border border-purple-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
          <div className="flex items-center space-x-3">
            <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
            <span className="text-base sm:text-lg font-bold text-purple-300">Soul Power Progress</span>
          </div>
          <span className="text-sm text-purple-300 font-semibold">
            {avatar.xp} / {avatar.xpToNext} XP
          </span>
        </div>
        <div className="w-full bg-purple-900/30 rounded-full h-3 sm:h-4 border border-purple-700/50">
          <div 
            className="bg-gradient-to-r from-purple-500 to-violet-500 h-3 sm:h-4 rounded-full transition-all duration-1000 shadow-lg shadow-purple-500/50"
            style={{ width: `${(avatar.xp / avatar.xpToNext) * 100}%` }}
          ></div>
        </div>
        <p className="text-xs text-purple-400 mt-3 text-center">
          {avatar.xpToNext - avatar.xp} XP needed to ascend to Level {avatar.level + 1}
        </p>
      </div>
    </div>
  );
};