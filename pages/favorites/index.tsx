import { useEffect, useState } from 'react';

import { getPokemons } from '@/utils';
import { Layout } from '@/components/layout';
import { NoFavorites } from '@/components/ui';
import { Card, Grid } from '@nextui-org/react';

export default function FavoritesPage() {
  const [favoritesPokemos, setFavoritesPokemos] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemos(getPokemons());
  }, []);

  return (
    <>
      <Layout title='Pokemons Favoritos'>
        {!favoritesPokemos.length ? (
          <NoFavorites />
        ) : (
          <Grid.Container gap={2} direction='row' justify='flex-start'>
            {favoritesPokemos.map((id) => (
              <Grid key={id} xs={6} sm={3} md={2} xl={1}>
                <Card isHoverable isPressable css={{ padding: 10 }}>
                  <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={'100%'}
                    height={140}
                  />
                </Card>
              </Grid>
            ))}
          </Grid.Container>
        )}
      </Layout>
    </>
  );
}
