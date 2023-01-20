import { GetStaticProps, NextPage } from 'next';
import { Layout } from '@/components/layout';

const HomePage: NextPage = (props) => {
  console.log({props});

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
  console.log('hola mundo');

  return {
    props: { name: 'gerardo' },
  };
};

export default HomePage;
