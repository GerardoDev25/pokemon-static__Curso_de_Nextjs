import { GetStaticProps, NextPage } from 'next';
import { Card, Grid, Row, Text } from '@nextui-org/react';

import { PoemonListResponse, SmallPokemon } from '@/interfaces';
import { Layout } from '@/components/layout';
import { pokeApi } from '@/api';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);

  return (
    <Layout title='Listado de Pokemon'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map(({ id, name, img }) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card isHoverable isPressable>
              <Card.Body css={{ p: 1 }}>
                <Card.Image src={img} width='100%' height={140} />
                <Card.Footer>
                  <Row justify='space-between'>
                    <Text transform='capitalize'>{name}</Text>
                    <Text>{id}</Text>
                  </Row>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get<PoemonListResponse>('/pokemon?limit=151');
  console.log(data);

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
