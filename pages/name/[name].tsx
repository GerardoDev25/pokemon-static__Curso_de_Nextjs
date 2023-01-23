import { useState } from 'react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';

import confeti from 'canvas-confetti';

import { existInFavorites, getPokemonInfo, localFavorite } from '@/utils';
import { Layout } from '@/components/layout';
import { pokeApi } from '@/api';
import { PoemonListResponse, Pokemon } from '@/interfaces';

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorite, setIsInFavorite] = useState(existInFavorites(pokemon.id));

  const inToggleFavorite = () => {
    localFavorite(pokemon.id);
    setIsInFavorite(!isInFavorite);

    if (!isInFavorite) return;

    confeti({
      zIndex: 999,
      particleCount: 100,
      spread: 260,
      angle: -100,
      origin: {
        x: 0,
        y: 0,
      },
    });
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.pnd'}
                alt={pokemon.name}
                width='100'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>
                {pokemon.name}
              </Text>
              <Button color={'gradient'} ghost={isInFavorite} onPress={inToggleFavorite}>
                {isInFavorite ? 'en Favoritos' : 'Guardar en Favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container direction='row' display='flex'>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PoemonListResponse>('/pokemon?limit=151');

  return {
    paths: data.results.map(({ name }) => ({ params: { name } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: { pokemon: await getPokemonInfo(name) },
  };
};

export default PokemonByNamePage;
