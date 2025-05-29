import { Users, Brain, MessageCircle, Smile } from 'lucide-react';
import { GameCategory } from '@/lib/game-data';

interface GameCardProps {
  category: GameCategory;
  onClick: () => void;
}

const categoryIcons = {
  'question-circle': Users,
  'balance-scale': Brain,
  'heart': MessageCircle,
  'running': Smile
};

const categoryFeatures = {
  'truthOrDare': { icon: Users, text: 'Perfect for groups' },
  'wouldYouRather': { icon: Brain, text: 'Think & discuss' },
  'deepQuestions': { icon: MessageCircle, text: 'Deep conversations' },
  'bodyPartGame': { icon: Smile, text: 'Active & fun' }
};

export function GameCard({ category, onClick }: GameCardProps) {
  const IconComponent = categoryIcons[category.icon as keyof typeof categoryIcons] || Users;
  const feature = categoryFeatures[category.id as keyof typeof categoryFeatures];
  const FeatureIcon = feature?.icon || Users;

  return (
    <div 
      className={`card-3d bg-gradient-to-br ${category.color} rounded-2xl p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 shadow-2xl`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="bg-white/20 rounded-full p-3">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <div className="text-right">
          <div className="text-white/80 text-sm">{category.stats}</div>
          <div className="text-white text-lg font-semibold">{category.subtitle}</div>
        </div>
      </div>
      <h3 className="font-bold text-2xl text-white mb-2">{category.title}</h3>
      <p className="text-white/90 text-sm">{category.description}</p>
      <div className="mt-4 flex items-center text-white/80">
        <FeatureIcon className="w-4 h-4 mr-2" />
        <span className="text-sm">{feature?.text}</span>
      </div>
    </div>
  );
}
