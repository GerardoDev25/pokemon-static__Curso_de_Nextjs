import { GetStaticProps, NextPage } from 'next';
import { Grid } from '@nextui-org/react';

import { PoemonListResponse, SmallPokemon } from '@/interfaces';
import { Layout } from '@/components/layout';
import { pokeApi } from '@/api';
import { PokemonCard } from '@/components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de Pokemon'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get<PoemonListResponse>('/pokemon?limit=151');

  const urlImg =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index,
    img: `${urlImg}${index + 1}.svg`,
  }));

  return {
    props: { pokemons },
  };
};

export default HomePage;
