import { useMemo } from 'react';

export function useArcadeSearch(games, searchTerm) {
  return useMemo(() => {
    
    const term = searchTerm.trim().toLowerCase();

   
    if (!term) {
      return games;
    }

    
    return games.filter((game) => 
      game.title.toLowerCase().includes(term)
    );
  }, [games, searchTerm]); 
}
