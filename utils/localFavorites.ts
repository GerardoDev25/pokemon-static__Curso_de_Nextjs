export const localFavorite = (id: number) => {
  console.warn('tootledfvdfvdfdfvdfvdfvdfvdfvdfvdfvdfv');
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  favorites.includes(id)
    ? (favorites = favorites.filter((pokeId) => pokeId !== id))
    : favorites.push(id);

  localStorage.setItem('favorites', JSON.stringify(favorites));
};
