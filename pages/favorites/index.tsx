import { useEffect, useState } from 'react';

import { getPokemons } from '@/utils';
import { Layout } from '@/components/layout';
import { NoFavorites } from '@/components/ui';

export default function FavoritesPage() {
  const [favoritesPokemos, setFavoritesPokemos] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemos(getPokemons());
  }, []);

  return (
    <>
      <Layout title='Pokemons Favoritos'>
        <NoFavorites />
      </Layout>
    </>
  );
}
