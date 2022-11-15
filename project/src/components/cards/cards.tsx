import React from 'react';
import { offerType } from '../../mocks/offers';
import Card from '../card/card';

function getCards(offers: offerType[]): JSX.Element[] {
  const cards: JSX.Element[] = [];
  for (let index = 0; index < offers.length; index++) {
    cards[index] = <Card key={offers[index].id.toString()} offer={offers[index]} />;
  }

  return cards;
}

type CardsProps = {
  offers: offerType[];
};

function Cards({ offers }: CardsProps): JSX.Element {
  return (
    <>
      {getCards(offers)}
    </>
  );
}

export default Cards;
