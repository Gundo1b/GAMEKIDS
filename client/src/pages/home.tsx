import { useState } from 'react';
import { GameCard } from '@/components/game-card';
import { GameInterface } from '@/components/game-interface';
import { gameData, GameCategory } from '@/lib/game-data';

export default function Home() {
  const [currentCategory, setCurrentCategory] = useState<GameCategory | null>(null);

  const showCategory = (categoryId: string) => {
    setCurrentCategory(gameData[categoryId]);
  };

  const showCategories = () => {
    setCurrentCategory(null);
  };

  if (currentCategory) {
    return (
      <div className="min-h-screen gradient-party-bg">
        <div className="px-4 py-8">
          <GameInterface 
            category={currentCategory} 
            onBack={showCategories}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-party-bg text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-cyan-500/20 to-blue-500/20"></div>
        <div className="relative px-6 py-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-red-500 to-cyan-500 p-4 rounded-full">
                <div className="text-3xl text-white">🎉</div>
              </div>
            </div>
          </div>
          <h1 className="font-bold text-4xl md:text-5xl mb-3 bg-gradient-to-r from-yellow-400 via-red-500 to-cyan-500 bg-clip-text text-transparent">
            Party Games
          </h1>
          <p className="text-gray-300 text-lg max-w-md mx-auto">
            Get the party started with fun games for any group!
          </p>
        </div>
      </header>

      {/* Game Categories */}
      <main className="px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {Object.values(gameData).map((category) => (
              <GameCard
                key={category.id}
                category={category}
                onClick={() => showCategory(category.id)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
