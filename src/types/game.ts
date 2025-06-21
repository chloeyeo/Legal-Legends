export interface LegalAvatar {
  id: string;
  name: string;
  level: number;
  xp: number;
  xpToNext: number;
  specialization: 'Corporate' | 'Criminal' | 'Civil' | 'Family' | 'Immigration';
  avatar: string;
  skills: {
    advocacy: number;
    research: number;
    negotiation: number;
    ethics: number;
    drafting: number;
  };
  achievements: Achievement[];
  artifacts: LegalArtifact[];
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  gold: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  unlockedAt: Date;
}

export interface LegalArtifact {
  id: string;
  name: string;
  type: 'Precedent' | 'Template' | 'Strategy' | 'Wisdom';
  description: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  effect: string;
}

export interface GameMode {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: number;
  xpReward: number;
  goldReward: number;
  requiredLevel: number;
  isUnlocked: boolean;
  questType: 'story' | 'challenge' | 'boss';
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  level: number;
  xp: number;
  specialization: string;
  achievements: number;
}

// Enhanced Citation & Research Integration
export interface LegalAuthority {
  type: 'case' | 'statute' | 'regulation' | 'rule' | 'commentary';
  citation: string;
  bluebookCitation: string;
  url?: string;
  summary: string;
  jurisdiction: string;
  year: number;
}

export interface RelatedConcept {
  name: string;
  description: string;
  relationship: string; // "distinguishes", "supports", "conflicts with", etc.
}

export interface JurisdictionalVariation {
  jurisdiction: string;
  rule: string;
  citation?: string;
  difference: string;
}

export interface QuestChoice {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
  detailedExplanation?: string;
  
  // Enhanced Citation & Research Integration
  primaryAuthority?: LegalAuthority;
  relatedAuthorities?: LegalAuthority[];
  relatedConcepts?: RelatedConcept[];
  
  // Multi-Perspective Analysis
  opposingArgument?: string;
  jurisdictionalVariations?: JurisdictionalVariation[];
  policyConsiderations?: string;
  practiceAreaApplications?: string[];
  
  // Legacy support for existing questions
  legalCitation?: string;
  citationUrl?: string;
  legalExplanation?: string;
  
  xpGain: number;
  skillBonus?: keyof LegalAvatar['skills'];
  consequence: 'success' | 'failure' | 'neutral';
}

export interface QuestQuestion {
  id: string;
  title: string;
  scenario: string;
  question: string;
  choices: QuestChoice[];
  skillFocus: keyof LegalAvatar['skills'];
  
  // Additional context for enhanced learning
  backgroundContext?: string;
  practicalImportance?: string;
}

export interface QuestScenario {
  id: string;
  title: string;
  description: string;
  introduction: string;
  questions: QuestQuestion[];
  successOutcome: string;
  failureOutcome: string;
  minCorrectAnswers: number;
}

export interface QuestProgress {
  currentQuestionIndex: number;
  correctAnswers: number;
  totalXpGained: number;
  totalGoldGained: number;
  answeredQuestions: Array<{
    questionId: string;
    choiceId: string;
    wasCorrect: boolean;
    xpGained: number;
  }>;
}