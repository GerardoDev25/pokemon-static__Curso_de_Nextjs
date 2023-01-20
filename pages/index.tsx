import { GetStaticProps, NextPage } from 'next';
import { Layout } from '@/components/layout';
import { pokeApi } from '@/api';

const HomePage: NextPage = (props) => {
  console.log({ props });

  return (
    <Layout title='Listado de Pokemon'>
      <ul>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
        <li>pokemon</li>
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get('/pokemon?limit=151');
  console.log(data);

  return {
    props: { pokemons: data.results },
  };
};

export default HomePage;
