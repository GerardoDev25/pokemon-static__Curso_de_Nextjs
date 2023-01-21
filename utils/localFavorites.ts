export const localFavorite = (id: number): void => {
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  favorites.includes(id)
    ? (favorites = favorites.filter((pokeId) => pokeId !== id))
    : favorites.push(id);

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const existInFavorites = (id: number): boolean => {
  if (typeof window == 'undefined') return false;

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return favorites.includes(id);
};

export const getPokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};
