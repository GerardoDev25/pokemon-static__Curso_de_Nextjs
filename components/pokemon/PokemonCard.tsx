import { SmallPokemon } from '@/interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Pokemon {
  pokemon: SmallPokemon;
}

export const PokemonCard: React.FC<Pokemon> = ({ pokemon }) => {
  const { id, img, name } = pokemon;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={handleClick}>
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
  );
};
