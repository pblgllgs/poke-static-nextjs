import React, { FC } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces';
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onPokemonClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  const { name, id, img, url } = pokemon;

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card hoverable clickable onClick={onPokemonClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} alt={name} width="100$" height={140} />
        </Card.Body>
        <Row>
          <Text h3>
            #{id} {name}
          </Text>
        </Row>
        <Card.Footer></Card.Footer>
      </Card>
    </Grid>
  );
};
