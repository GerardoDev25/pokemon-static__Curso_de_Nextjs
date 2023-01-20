import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import { Layout } from '@/components/layout';
import { pokeApi } from '@/api';

interface Props {
  // pokemon: any;
  id: number;
  name: string;
}

const Pokemon: NextPage<Props> = ({ id, name }) => {
  const router = useRouter();

  return (
    <Layout>
      <h1></h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { id: 1, name: 'saaa' },
  };
};

export default Pokemon;
