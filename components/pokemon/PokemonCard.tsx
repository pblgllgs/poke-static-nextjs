import React, { FC } from 'react';
import { Card, Grid, Row, Text, Table } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces';
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

  const router = useRouter()

  const onPokemonClick = () => {
    router.push(`/pokemon/${pokemon.id}`)
  }


  const { name, id, img, url } = pokemon;

  //TODO: user Table de nextui

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card hoverable clickable onClick={onPokemonClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} alt={name} width="100$" height={140} />
        </Card.Body>
        <Card.Footer>
          <Table
            aria-label="Example table with static content"
            css={{
              height: 'auto',
              minWidth: '100%',
            }}
          >
            <Table.Header>
              <Table.Column>IMG</Table.Column>
              <Table.Column>DATA</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row key="1">
                <Table.Cell>as</Table.Cell>
                <Table.Cell>{name}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
