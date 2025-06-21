import React, { useState, useEffect} from 'react';
import { ArrowLeft, Trophy, Star, Clock, Sword, Shield, Heart, Zap, ChevronRight, ExternalLink, BookOpen, Scale, Gavel, Users, Globe, Target } from 'lucide-react';
import { GameMode as GameModeType, LegalAvatar, QuestScenario, QuestChoice, QuestQuestion, QuestProgress } from '../types/game';
import { questScenarios } from '../data/questScenarios';

interface GameModeProps {
  mode: GameModeType;
  avatar: LegalAvatar;
  onBack: () => void;
  onComplete: (xpGained: number, goldGained: number) => void;
}

export const GameMode: React.FC<GameModeProps> = ({ mode, avatar, onBack, onComplete }) => {
  const [currentScenario, setCurrentScenario] = useState<QuestScenario | null>(null);
  const [questProgress, setQuestProgress] = useState<QuestProgress | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<QuestChoice | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [questComplete, setQuestComplete] = useState(false);
  const [finalResult, setFinalResult] = useState<'success' | 'failure' | null>(null);

  useEffect(() => {
    // Scroll to top when transitioning between questions or showing results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [questProgress?.currentQuestionIndex, showResult, questComplete, isPlaying]);

  const startQuest = (scenario: QuestScenario) => {
    setCurrentScenario(scenario);
    setQuestProgress({
      currentQuestionIndex: 0,
      correctAnswers: 0,
      totalXpGained: 0,
      totalGoldGained: 0,
      answeredQuestions: []
    });
    setIsPlaying(true);
    setSelectedChoice(null);
    setShowResult(false);
    setShowContinueButton(false);
    setQuestComplete(false);
    setFinalResult(null);
  };

  const makeChoice = (choice: QuestChoice) => {
    if (!currentScenario || !questProgress) return;

    setSelectedChoice(choice);
    setShowResult(true);
    
    const currentQuestion = currentScenario.questions[questProgress.currentQuestionIndex];
    const xpGained = choice.xpGain;
    
    const updatedProgress = {
      ...questProgress,
      correctAnswers: questProgress.correctAnswers + (choice.isCorrect ? 1 : 0),
      totalXpGained: questProgress.totalXpGained + xpGained,
      totalGoldGained: questProgress.totalGoldGained + (choice.isCorrect ? 10 : 5),
      answeredQuestions: [
        ...questProgress.answeredQuestions,
        {
          questionId: currentQuestion.id,
          choiceId: choice.id,
          wasCorrect: choice.isCorrect,
          xpGained: xpGained
        }
      ]
    };

    setQuestProgress(updatedProgress);
    
    // Show continue button after a brief delay
    setTimeout(() => {
      setShowContinueButton(true);
    }, 1500);
  };

  const continueQuest = () => {
    if (!currentScenario || !questProgress) return;

    const nextQuestionIndex = questProgress.currentQuestionIndex + 1;
    
    if (nextQuestionIndex >= currentScenario.questions.length) {
      // Quest complete
      const success = questProgress.correctAnswers >= currentScenario.minCorrectAnswers;
      setFinalResult(success ? 'success' : 'failure');
      setQuestComplete(true);
      
      // Complete quest after showing final result
      setTimeout(() => {
        onComplete(questProgress.totalXpGained, questProgress.totalGoldGained);
      }, 4000);
    } else {
      // Next question
      setQuestProgress({
        ...questProgress,
        currentQuestionIndex: nextQuestionIndex
      });
      setSelectedChoice(null);
      setShowResult(false);
      setShowContinueButton(false);
    }
  };

  const currentScenarios = questScenarios[mode.id] || questScenarios.courtroom;

  // Quest complete screen
  if (questComplete && finalResult && questProgress) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black flex items-center justify-center p-4">
        <div className="bg-black/80 backdrop-blur-sm border border-yellow-600/30 rounded-3xl shadow-2xl max-w-4xl w-full p-4 sm:p-8 text-center">
          <div className="mb-6 sm:mb-8">
            <div className={`text-6xl sm:text-8xl mb-4 sm:mb-6 ${finalResult === 'success' ? 'animate-bounce' : 'animate-pulse'}`}>
              {finalResult === 'success' ? '🏆' : '💀'}
            </div>
            <h2 className={`text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 ${
              finalResult === 'success' 
                ? 'text-yellow-400' 
                : 'text-red-400'
            }`}>
              {finalResult === 'success' ? 'QUEST COMPLETED!' : 'QUEST FAILED!'}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-4 sm:mb-6 px-2">
              {finalResult === 'success' ? currentScenario?.successOutcome : currentScenario?.failureOutcome}
            </p>
            
            {/* Quest Summary */}
            <div className="bg-gradient-to-r from-purple-900/50 to-black/50 rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-purple-300 mb-3 sm:mb-4">Quest Summary</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-green-400">{questProgress.correctAnswers}</div>
                  <div className="text-xs text-green-300">Correct Answers</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-red-400">{currentScenario?.questions.length! - questProgress.correctAnswers}</div>
                  <div className="text-xs text-red-300">Incorrect Answers</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-yellow-400">{questProgress.totalXpGained}</div>
                  <div className="text-xs text-yellow-300">XP Gained</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">{questProgress.totalGoldGained}</div>
                  <div className="text-xs text-amber-300">Gold Earned</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-400">
            <Clock className="h-5 w-5 sm:h-6 sm:w-6 mx-auto mb-2" />
            <p className="text-sm">Returning to the Dark Courts...</p>
          </div>
        </div>
      </div>
    );
  }

  // Active quest screen
  if (isPlaying && currentScenario && questProgress) {
    const currentQuestion = currentScenario.questions[questProgress.currentQuestionIndex];
    
    // Show result screen
    if (showResult && selectedChoice) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black p-2 sm:p-4">
          <div className="max-w-7xl mx-auto">
            {/* Result Header */}
            <div className="bg-black/80 backdrop-blur-sm border border-yellow-600/30 rounded-2xl sm:rounded-3xl p-4 sm:p-8 mb-4 sm:mb-8 shadow-2xl text-center">
              <div className={`text-4xl sm:text-6xl mb-3 sm:mb-4 ${selectedChoice.isCorrect ? 'animate-bounce' : 'animate-pulse'}`}>
                {selectedChoice.isCorrect ? '✅' : '❌'}
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${
                selectedChoice.isCorrect ? 'text-green-400' : 'text-red-400'
              }`}>
                {selectedChoice.isCorrect ? 'CORRECT!' : 'INCORRECT!'}
              </h2>
              <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-base sm:text-lg flex-wrap gap-2">
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>+{selectedChoice.xpGain} XP</span>
                </div>
                <div className="flex items-center space-x-2 text-amber-400">
                  <span>💰</span>
                  <span>+{selectedChoice.isCorrect ? 10 : 5} Gold</span>
                </div>
              </div>
            </div>

            {/* Enhanced Analysis - Mobile Stacked Layout */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {/* Legal Analysis */}
              <div className="bg-gradient-to-br from-purple-900/50 to-black/50 backdrop-blur-sm border border-purple-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                  <h3 className="text-lg sm:text-2xl font-bold text-purple-300">Legal Analysis</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-black/50 border border-gray-700/50 rounded-xl p-3 sm:p-4">
                    <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Your Choice:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedChoice.text}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-400 mb-2 text-sm sm:text-base">Explanation:</h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{selectedChoice.explanation}</p>
                  </div>
                  {selectedChoice.detailedExplanation && (
                    <div>
                      <h4 className="font-bold text-blue-400 mb-2 text-sm sm:text-base">Detailed Legal Reasoning:</h4>
                      <p className="text-gray-300 leading-relaxed text-sm">{selectedChoice.detailedExplanation}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Legal Authority & Citations */}
              <div className="bg-gradient-to-br from-red-900/50 to-black/50 backdrop-blur-sm border border-red-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
                  <h3 className="text-lg sm:text-2xl font-bold text-red-300">Legal Authority</h3>
                </div>
                
                {/* Primary Authority */}
                {selectedChoice.primaryAuthority ? (
                  <div className="space-y-4">
                    <div className="bg-black/50 border border-gray-700/50 rounded-xl p-3 sm:p-4">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          selectedChoice.primaryAuthority.type === 'case' ? 'bg-blue-900/50 text-blue-300' :
                          selectedChoice.primaryAuthority.type === 'statute' ? 'bg-green-900/50 text-green-300' :
                          selectedChoice.primaryAuthority.type === 'rule' ? 'bg-purple-900/50 text-purple-300' :
                          'bg-gray-900/50 text-gray-300'
                        }`}>
                          {selectedChoice.primaryAuthority.type.toUpperCase()}
                        </span>
                        <span className="text-xs text-gray-400">{selectedChoice.primaryAuthority.jurisdiction} • {selectedChoice.primaryAuthority.year}</span>
                      </div>
                      <h4 className="font-bold text-yellow-400 mb-2 text-sm sm:text-base">Primary Authority:</h4>
                      <p className="text-gray-300 font-mono text-xs sm:text-sm mb-2 break-all">{selectedChoice.primaryAuthority.bluebookCitation}</p>
                      <p className="text-gray-400 text-sm mb-3 leading-relaxed">{selectedChoice.primaryAuthority.summary}</p>
                      {selectedChoice.primaryAuthority.url && (
                        <a
                          href={selectedChoice.primaryAuthority.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all text-xs sm:text-sm font-semibold"
                        >
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>Read Full {selectedChoice.primaryAuthority.type === 'case' ? 'Case' : 'Authority'}</span>
                        </a>
                      )}
                    </div>
                    
                    {/* Related Authorities */}
                    {selectedChoice.relatedAuthorities && selectedChoice.relatedAuthorities.length > 0 && (
                      <div className="bg-black/30 border border-gray-700/30 rounded-xl p-3 sm:p-4">
                        <h4 className="font-bold text-cyan-400 mb-3 text-sm sm:text-base">Related Authorities:</h4>
                        <div className="space-y-2">
                          {selectedChoice.relatedAuthorities.map((auth, index) => (
                            <div key={index} className="text-sm">
                              <p className="text-gray-300 font-mono text-xs break-all">{auth.bluebookCitation}</p>
                              <p className="text-gray-400 text-xs leading-relaxed">{auth.summary}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : selectedChoice.legalCitation && selectedChoice.citationUrl ? (
                  <div className="space-y-4">
                    <div className="bg-black/50 border border-gray-700/50 rounded-xl p-3 sm:p-4">
                      <h4 className="font-bold text-yellow-400 mb-2 text-sm sm:text-base">Primary Citation:</h4>
                      <p className="text-gray-300 font-mono text-xs sm:text-sm mb-3 break-all">{selectedChoice.legalCitation}</p>
                      <a
                        href={selectedChoice.citationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all text-xs sm:text-sm font-semibold"
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>Read Full Case</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="bg-black/50 border border-gray-700/50 rounded-xl p-3 sm:p-4">
                    <h4 className="font-bold text-yellow-400 mb-2 text-sm sm:text-base">Legal Principle:</h4>
                    <p className="text-gray-300 leading-relaxed text-sm mb-3">
                      {selectedChoice.legalExplanation || "This question tests fundamental legal principles that are essential for practice. The reasoning provided above explains the key concepts and their application."}
                    </p>
                    <div className="text-xs text-gray-400 bg-gray-900/50 rounded-lg p-3">
                      <p className="mb-2"><strong>💡 Study Tip:</strong> Review your legal textbooks or online resources for more detailed coverage of this topic.</p>
                      <p><strong>🎯 Practice:</strong> Consider how these principles apply in different factual scenarios.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Multi-Perspective Analysis */}
              <div className="bg-gradient-to-br from-green-900/50 to-black/50 backdrop-blur-sm border border-green-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                  <h3 className="text-lg sm:text-2xl font-bold text-green-300">Multi-Perspective Analysis</h3>
                </div>
                
                <div className="space-y-4">
                  {/* Opposing Arguments */}
                  {selectedChoice.opposingArgument && (
                    <div className="bg-black/50 border border-gray-700/50 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Gavel className="h-4 w-4 text-red-400" />
                        <h4 className="font-bold text-red-400 text-sm sm:text-base">Opposing Counsel Would Argue:</h4>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{selectedChoice.opposingArgument}</p>
                    </div>
                  )}

                  {/* Jurisdictional Variations */}
                  {selectedChoice.jurisdictionalVariations && selectedChoice.jurisdictionalVariations.length > 0 && (
                    <div className="bg-black/50 border border-gray-700/50 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <Globe className="h-4 w-4 text-blue-400" />
                        <h4 className="font-bold text-blue-400 text-sm sm:text-base">Jurisdictional Variations:</h4>
                      </div>
                      <div className="space-y-3">
                        {selectedChoice.jurisdictionalVariations.map((variation, index) => (
                          <div key={index} className="border-l-2 border-blue-500/30 pl-3">
                            <p className="text-yellow-300 font-semibold text-sm">{variation.jurisdiction}:</p>
                            <p className="text-gray-300 text-sm leading-relaxed">{variation.rule}</p>
                            <p className="text-gray-400 text-xs italic">{variation.difference}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Policy Considerations */}
                  {selectedChoice.policyConsiderations && (
                    <div className="bg-black/50 border border-gray-700/50 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-4 w-4 text-purple-400" />
                        <h4 className="font-bold text-purple-400 text-sm sm:text-base">Policy Considerations:</h4>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{selectedChoice.policyConsiderations}</p>
                    </div>
                  )}

                  {/* Practice Area Applications */}
                  {selectedChoice.practiceAreaApplications && selectedChoice.practiceAreaApplications.length > 0 && (
                    <div className="bg-black/50 border border-gray-700/50 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center space-x-2 mb-3">
                        <BookOpen className="h-4 w-4 text-green-400" />
                        <h4 className="font-bold text-green-400 text-sm sm:text-base">Practice Applications:</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedChoice.practiceAreaApplications.map((area, index) => (
                          <span key={index} className="px-2 py-1 bg-green-900/30 text-green-300 rounded text-xs border border-green-500/30">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Related Concepts */}
                  {selectedChoice.relatedConcepts && selectedChoice.relatedConcepts.length > 0 && (
                    <div className="bg-black/30 border border-gray-700/30 rounded-xl p-3 sm:p-4">
                      <h4 className="font-bold text-cyan-400 mb-3 text-sm sm:text-base">Related Legal Concepts:</h4>
                      <div className="space-y-2">
                        {selectedChoice.relatedConcepts.map((concept, index) => (
                          <div key={index} className="text-sm">
                            <p className="text-cyan-300 font-semibold">{concept.name}</p>
                            <p className="text-gray-400 text-xs leading-relaxed">{concept.description}</p>
                            <p className="text-gray-500 text-xs italic">{concept.relationship}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Progress and Continue */}
            <div className="bg-black/80 backdrop-blur-sm border border-yellow-600/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                <div>
                  Question {questProgress.currentQuestionIndex + 1} of {currentScenario.questions.length}
                </div>
                <div>
                  Score: {questProgress.correctAnswers}/{questProgress.currentQuestionIndex + 1}
                </div>
              </div>
              
              {showContinueButton && (
                <button
                  onClick={continueQuest}
                  className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 sm:px-8 py-3 rounded-xl font-bold hover:from-purple-500 hover:to-violet-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30 flex items-center space-x-2 mx-auto text-sm sm:text-base"
                >
                  <span>
                    {questProgress.currentQuestionIndex + 1 >= currentScenario.questions.length 
                      ? 'Complete Quest' 
                      : 'Continue Quest'
                    }
                  </span>
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Question screen
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black p-2 sm:p-4">
        <div className="max-w-6xl mx-auto">
          {/* Quest Header */}
          <div className="bg-black/80 backdrop-blur-sm border border-yellow-600/30 rounded-2xl sm:rounded-3xl p-4 sm:p-8 mb-4 sm:mb-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-4">
              <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                {currentScenario.title}
              </h1>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="flex items-center space-x-2 bg-red-900/30 px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-red-500/30">
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-400" />
                  <span className="text-red-300 font-bold text-sm">{avatar.health}/{avatar.maxHealth}</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-900/30 px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-blue-500/30">
                  <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                  <span className="text-blue-300 font-bold text-sm">{avatar.mana}/{avatar.maxMana}</span>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-2">
                <span>Question {questProgress.currentQuestionIndex + 1} of {currentScenario.questions.length}</span>
                <span>Score: {questProgress.correctAnswers}/{questProgress.currentQuestionIndex}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((questProgress.currentQuestionIndex) / currentScenario.questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Question Content - Mobile Stacked Layout */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Scenario Panel */}
            <div className="bg-gradient-to-br from-purple-900/50 to-black/50 backdrop-blur-sm border border-purple-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
              <h3 className="text-lg sm:text-2xl font-bold text-purple-300 mb-4">{currentQuestion.title}</h3>
              <div className="space-y-4">
                {currentQuestion.backgroundContext && (
                  <div className="bg-black/30 border border-gray-700/30 rounded-xl p-3 sm:p-4">
                    <h4 className="font-bold text-cyan-400 mb-2 text-sm sm:text-base">Background:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{currentQuestion.backgroundContext}</p>
                  </div>
                )}
                <div className="bg-black/50 border border-gray-700/50 rounded-xl p-3 sm:p-4">
                  <h4 className="font-bold text-yellow-400 mb-2 text-sm sm:text-base">Scenario:</h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{currentQuestion.scenario}</p>
                </div>
                <div className="bg-black/50 border border-gray-700/50 rounded-xl p-3 sm:p-4">
                  <h4 className="font-bold text-red-400 mb-2 text-sm sm:text-base">Question:</h4>
                  <p className="text-white font-medium text-sm sm:text-base leading-relaxed">{currentQuestion.question}</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-500/30 font-bold text-xs sm:text-sm w-fit">
                    {currentQuestion.skillFocus.toUpperCase()} FOCUS
                  </span>
                  {currentQuestion.practicalImportance && (
                    <span className="px-3 py-1 rounded-full bg-green-900/50 text-green-300 border border-green-500/30 font-bold text-xs w-fit">
                      HIGH IMPACT
                    </span>
                  )}
                </div>
                {currentQuestion.practicalImportance && (
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-3">
                    <p className="text-green-300 text-sm leading-relaxed"><strong>Why This Matters:</strong> {currentQuestion.practicalImportance}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Choices Panel */}
            <div className="bg-gradient-to-br from-red-900/50 to-black/50 backdrop-blur-sm border border-red-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
              <h3 className="text-lg sm:text-2xl font-bold text-red-300 mb-4 sm:mb-6">Choose Your Action</h3>
              <div className="space-y-3 sm:space-y-4">
                {currentQuestion.choices.map((choice, index) => (
                  <button
                    key={choice.id}
                    onClick={() => makeChoice(choice)}
                    className="w-full p-3 sm:p-4 rounded-xl border-2 text-left transition-all transform hover:scale-105 border-gray-600/50 bg-gray-900/30 hover:border-yellow-400/50 hover:bg-yellow-900/20 text-gray-300 hover:text-yellow-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold text-xs sm:text-sm px-2 py-1 rounded-lg min-w-[24px] text-center flex-shrink-0">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium leading-relaxed text-sm sm:text-base break-words">{choice.text}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quest selection screen
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6 sm:mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors bg-black/50 px-3 sm:px-4 py-2 rounded-xl border border-gray-700/50 text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">Return to Dark Courts</span>
            <span className="sm:hidden">Back</span>
          </button>
        </div>

        {/* Mode Header */}
        <div className="bg-black/80 backdrop-blur-sm border border-yellow-600/30 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="text-6xl sm:text-8xl">{mode.icon}</div>
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent mb-3 sm:mb-4">
                  {mode.title}
                </h1>
                <p className="text-gray-300 text-sm sm:text-lg max-w-2xl leading-relaxed">{mode.description}</p>
              </div>
            </div>
            
            <div className="flex flex-row lg:flex-col items-center lg:items-end space-x-6 lg:space-x-0 lg:space-y-3 w-full lg:w-auto justify-between lg:justify-start">
              <div className="flex items-center space-x-2 text-yellow-400 text-base sm:text-lg font-bold">
                <Trophy className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>{mode.xpReward} XP</span>
              </div>
              <div className="flex items-center space-x-2 text-amber-400 text-base sm:text-lg font-bold">
                <span>💰</span>
                <span>{mode.goldReward} Gold</span>
              </div>
              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      i < mode.difficulty ? 'text-yellow-400 fill-current' : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quest Selection */}
        <div>
          <div className="flex items-center space-x-4 mb-6 sm:mb-8">
            <Sword className="h-6 w-6 sm:h-8 sm:w-8 text-red-500" />
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              SELECT YOUR QUEST
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-red-500/50 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {currentScenarios.map((scenario, index) => (
              <div key={index} className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl hover:shadow-purple-500/20 transition-all transform hover:scale-105">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{scenario.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{scenario.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-900/50 text-purple-300 border border-purple-500/30">
                      {scenario.questions.length} QUESTIONS
                    </span>
                    <div className="text-xs text-gray-400">
                      Pass: {scenario.minCorrectAnswers}/{scenario.questions.length}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => startQuest(scenario)}
                  className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-3 px-4 rounded-xl font-bold hover:from-purple-500 hover:to-violet-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30 text-sm sm:text-base"
                >
                  ⚔️ BEGIN QUEST
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};