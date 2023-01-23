import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';

export const getPokemonInfo = async (term: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${term}`);

  return { id: data.id, name: data.name, sprites: data.sprites };
};
