import { useState, useEffect } from 'react';
import { ArrowLeft, Dice1, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GameCategory, TruthOrDareQuestion, WouldYouRatherQuestion } from '@/lib/game-data';

interface GameInterfaceProps {
  category: GameCategory;
  onBack: () => void;
}

export function GameInterface({ category, onBack }: GameInterfaceProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [usedQuestions, setUsedQuestions] = useState<Set<number>>(new Set());
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Reset when category changes
    setUsedQuestions(new Set());
    setCurrentQuestionIndex(0);
    getRandomQuestion();
  }, [category]);

  const getRandomQuestion = () => {
    if (isAnimating) return;
    
    let availableQuestions = [...Array(category.questions.length).keys()];
    
    // If all questions used, reset
    if (usedQuestions.size >= category.questions.length) {
      setUsedQuestions(new Set());
      availableQuestions = [...Array(category.questions.length).keys()];
    } else {
      availableQuestions = availableQuestions.filter(index => !usedQuestions.has(index));
    }
    
    const randomIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuestionIndex(randomIndex);
      setUsedQuestions(prev => new Set([...prev, randomIndex]));
      setIsAnimating(false);
    }, 300);
  };

  const currentQuestion = category.questions[currentQuestionIndex];
  const questionNumber = usedQuestions.size || 1;

  const renderQuestion = () => {
    if (category.id === 'relationshipChoices') {
      const question = currentQuestion as WouldYouRatherQuestion;
      return (
        <div className="space-y-4">
          <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
            <div className="flex items-center">
              <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div className="text-white text-lg">{question.optionA}</div>
            </div>
          </div>
          <div className="text-center text-white/60 text-lg font-bold">OR</div>
          <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
            <div className="flex items-center">
              <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <div className="text-white text-lg">{question.optionB}</div>
            </div>
          </div>
        </div>
      );
    }

    if (category.id === 'romanticDares') {
      return (
        <div className="text-xl md:text-2xl text-white leading-relaxed font-medium">
          💕 {currentQuestion as string}
        </div>
      );
    }

    return (
      <div className="text-xl md:text-2xl text-white leading-relaxed font-medium">
        {currentQuestion as string}
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={onBack}
        className="flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200 hover:bg-white/10"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Categories
      </Button>

      {/* Game Card */}
      <div className="relative">
        <div className={`bg-party-deep/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10 min-h-[400px] flex flex-col justify-center transition-all duration-300 ${isAnimating ? 'animate-card-flip' : ''}`}>
          
          {/* Category Header */}
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-gradient-to-r ${category.color}`}>
              <div className="text-3xl text-white">
                {category.id === 'intimateQuestions' && '💕'}
                {category.id === 'romanticDares' && '✨'}
                {category.id === 'relationshipChoices' && '⚖️'}
                {category.id === 'memoryLane' && '📸'}
                {category.id === 'dreamsTogether' && '⭐'}
                {category.id === 'lovingTouch' && '💝'}
              </div>
            </div>
            <h2 className="font-bold text-3xl text-white mb-2">{category.title}</h2>
            <div className="text-white/60 text-sm">
              Question {questionNumber} of {category.questions.length}
            </div>
          </div>

          {/* Question Display */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              {renderQuestion()}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <Button
              onClick={getRandomQuestion}
              disabled={isAnimating}
              className={`flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold py-4 px-6 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${isAnimating ? 'opacity-50' : ''}`}
            >
              <Dice1 className="w-4 h-4 mr-2" />
              Next Question
            </Button>
            <Button
              onClick={onBack}
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-6 rounded-2xl hover:bg-white/20 transition-all duration-300 border-white/20"
            >
              <Home className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
