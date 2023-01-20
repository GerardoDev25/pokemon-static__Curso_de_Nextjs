import { Layout } from '@/components/layout';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  pokemon: any;
}

const Pokemon: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter();

  return (
    <Layout>
      <h1></h1>
    </Layout>
  );
};

export default Pokemon;
