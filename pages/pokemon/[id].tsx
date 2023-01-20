import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import { Layout } from '@/components/layout';
import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';

interface Props {
  pokemon: Pokemon;
}

const Pokemon: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter();

  console.log(pokemon);

  return (
    <Layout>
      <h1>{pokemon.name}</h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemosIds = [...Array(151)].map((_, id) => `${id + 1}`);

  return {
    paths: pokemosIds.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: { pokemon: data },
  };
};

export default Pokemon;
