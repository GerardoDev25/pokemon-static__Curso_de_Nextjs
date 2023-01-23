import { Grid } from '@nextui-org/react';

import { FavoritesCardPokemon } from './';

interface Props {
  pokemons: number[];
}

export const FavoritesPokemons: React.FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {pokemons.map((id) => (
        <FavoritesCardPokemon pokemonId={id} key={id} />
      ))}
    </Grid.Container>
  );
};
