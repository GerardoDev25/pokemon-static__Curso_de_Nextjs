import { NextPage } from 'next';
import { Button } from '@nextui-org/react';
import { Layout } from '@/components/layout';

const HomePage: NextPage = () => {
  return (
    <Layout >
      <Button color={'gradient'}>Hola mundo</Button>
    </Layout>
  );
};
export default HomePage;
