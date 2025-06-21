import React, { useState } from 'react';
import { Skull, Sword, Shield, BookOpen, Scale, Flame } from 'lucide-react';
import { LegalAvatar } from '../types/game';

interface AvatarCreationProps {
  onComplete: (avatar: LegalAvatar) => void;
}

const specializations = [
  { id: 'Corporate', name: 'Corporate Warlock', icon: Skull, color: 'purple', description: 'Master of dark contracts and corporate sorcery' },
  { id: 'Criminal', name: 'Shadow Defender', icon: Sword, color: 'red', description: 'Warrior of justice in the criminal underworld' },
  { id: 'Civil', name: 'Court Paladin', icon: Shield, color: 'blue', description: 'Noble protector of civil rights and liberties' },
  { id: 'Family', name: 'Harmony Sage', icon: BookOpen, color: 'green', description: 'Wise mediator of family disputes and bonds' },
  { id: 'Immigration', name: 'Border Mystic', icon: Flame, color: 'orange', description: 'Guide souls across legal boundaries' },
];

const avatarOptions = ['🧙‍♂️', '🧙‍♀️', '⚔️', '🛡️', '👑', '🔮', '⚖️', '🗡️'];

export const AvatarCreation: React.FC<AvatarCreationProps> = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('');
  const [selectedAvatar, setSelectedAvatar] = useState(avatarOptions[0]);

  const handleCreate = () => {
    if (name && selectedSpecialization) {
      const newAvatar: LegalAvatar = {
        id: Date.now().toString(),
        name,
        level: 1,
        xp: 0,
        xpToNext: 100,
        specialization: selectedSpecialization as any,
        avatar: selectedAvatar,
        skills: {
          advocacy: 15,
          research: 15,
          negotiation: 15,
          ethics: 15,
          drafting: 15,
        },
        achievements: [],
        artifacts: [],
        health: 100,
        maxHealth: 100,
        mana: 50,
        maxMana: 50,
        gold: 100,
      };
      onComplete(newAvatar);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black flex items-center justify-center p-2 sm:p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-ping"></div>
      </div>

      <div className="bg-black/80 backdrop-blur-sm border border-yellow-600/30 rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full p-4 sm:p-8 relative">
        {/* Glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-purple-600/20 to-yellow-600/20 rounded-2xl sm:rounded-3xl blur-sm"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <div className="bg-gradient-to-r from-yellow-500 to-amber-600 p-4 sm:p-6 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg shadow-yellow-500/50">
              <Scale className="h-8 w-8 sm:h-10 sm:w-10 text-black" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent mb-3 sm:mb-4">
              FORGE YOUR LEGEND
            </h1>
            <p className="text-gray-300 text-base sm:text-lg">Enter the Dark Courts and claim your destiny</p>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-3 sm:mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column */}
            <div className="space-y-4 sm:space-y-6">
              {/* Name Input */}
              <div className="bg-gray-900/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700/50">
                <label className="block text-yellow-400 font-semibold mb-2 sm:mb-3 text-base sm:text-lg">
                  ⚡ Champion Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-black/50 border border-yellow-600/30 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="Enter your legendary name..."
                />
              </div>

              {/* Avatar Selection */}
              <div className="bg-gray-900/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700/50">
                <label className="block text-yellow-400 font-semibold mb-2 sm:mb-3 text-base sm:text-lg">
                  🎭 Choose Your Form
                </label>
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {avatarOptions.map((avatar) => (
                    <button
                      key={avatar}
                      onClick={() => setSelectedAvatar(avatar)}
                      className={`w-12 h-12 sm:w-16 sm:h-16 text-2xl sm:text-3xl rounded-xl border-2 transition-all transform hover:scale-110 ${
                        selectedAvatar === avatar
                          ? 'border-yellow-500 bg-yellow-500/20 shadow-lg shadow-yellow-500/50 scale-110'
                          : 'border-gray-600 hover:border-yellow-400 bg-black/30'
                      }`}
                    >
                      {avatar}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Specialization Selection */}
              <div className="bg-gray-900/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700/50">
                <label className="block text-yellow-400 font-semibold mb-2 sm:mb-3 text-base sm:text-lg">
                  🔥 Choose Your Path
                </label>
                <div className="space-y-2 sm:space-y-3">
                  {specializations.map((spec) => {
                    const Icon = spec.icon;
                    return (
                      <button
                        key={spec.id}
                        onClick={() => setSelectedSpecialization(spec.id)}
                        className={`w-full p-3 sm:p-4 rounded-xl border-2 transition-all text-left transform hover:scale-105 ${
                          selectedSpecialization === spec.id
                            ? 'border-yellow-500 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 shadow-lg shadow-yellow-500/30'
                            : 'border-gray-600 hover:border-yellow-400 bg-black/30'
                        }`}
                      >
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className={`p-2 sm:p-3 rounded-lg bg-${spec.color}-500/20 border border-${spec.color}-500/30`}>
                            <Icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${spec.color}-400`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-white text-base sm:text-lg">{spec.name}</h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{spec.description}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Create Button */}
          <div className="mt-6 sm:mt-8 text-center">
            <button
              onClick={handleCreate}
              disabled={!name || !selectedSpecialization}
              className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-yellow-600 to-amber-600 text-black font-bold text-lg sm:text-xl rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:from-yellow-500 hover:to-amber-500 transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/50 disabled:shadow-none"
            >
              ⚔️ ENTER THE DARK COURTS ⚔️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};