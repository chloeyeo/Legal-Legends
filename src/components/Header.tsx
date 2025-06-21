import React from 'react';
import { Scale, User, Crown, Coins, Heart, Zap } from 'lucide-react';

interface HeaderProps {
  avatar: any;
  onViewProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({ avatar, onViewProfile }) => {
  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black border-b border-yellow-600/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="bg-gradient-to-r from-yellow-500 to-amber-600 p-2 sm:p-3 rounded-xl shadow-lg shadow-yellow-500/50">
              <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                LEGAL LEGENDS
              </h1>
              <p className="text-xs text-gray-400 font-semibold tracking-wider">DARK COURT CHRONICLES</p>
            </div>
          </div>

          {/* Stats Bar - Hidden on small screens, shown on medium+ */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {/* Health */}
            <div className="flex items-center space-x-2 bg-red-900/30 px-2 lg:px-3 py-1 lg:py-2 rounded-lg border border-red-500/30">
              <Heart className="h-3 w-3 lg:h-4 lg:w-4 text-red-400" />
              <span className="text-red-300 font-bold text-sm">{avatar.health}/{avatar.maxHealth}</span>
            </div>

            {/* Mana */}
            <div className="flex items-center space-x-2 bg-blue-900/30 px-2 lg:px-3 py-1 lg:py-2 rounded-lg border border-blue-500/30">
              <Zap className="h-3 w-3 lg:h-4 lg:w-4 text-blue-400" />
              <span className="text-blue-300 font-bold text-sm">{avatar.mana}/{avatar.maxMana}</span>
            </div>

            {/* Gold */}
            <div className="flex items-center space-x-2 bg-yellow-900/30 px-2 lg:px-3 py-1 lg:py-2 rounded-lg border border-yellow-500/30">
              <Coins className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400" />
              <span className="text-yellow-300 font-bold text-sm">{avatar.gold}</span>
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-white font-bold text-sm">{avatar.name}</p>
                <div className="flex items-center space-x-2">
                  <Crown className="h-3 w-3 text-yellow-400" />
                  <span className="text-xs text-yellow-400 font-semibold">Level {avatar.level}</span>
                  <div className="w-16 lg:w-20 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-yellow-500 to-amber-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(avatar.xp / avatar.xpToNext) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            <button
              onClick={onViewProfile}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 px-3 sm:px-4 py-2 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              <span className="hidden sm:inline text-sm text-white font-semibold">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};