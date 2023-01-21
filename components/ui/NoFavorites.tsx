import { Container, Text, Image } from '@nextui-org/react';
import React from 'react';

export const NoFavorites = () => {
  return (
    <Container
      css={{
        alignItems: 'center',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        justifyContent: 'center',
      }}
    >
      <Text h1> No hay Favoritos</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
        alt='golas'
        width={250}
        height={250}
        css={{ opacity: 0.3 }}
      />
    </Container>
  );
};
