import { offerType } from '../../mocks/offers';
import Card from '../card/card';

function getCards(offers: offerType[], listItemHoverHandler: React.MouseEventHandler): JSX.Element[] {
  const cards: JSX.Element[] = [];
  for (let index = 0; index < offers.length; index++) {
    cards[index] = <Card key={offers[index].id.toString()} offer={offers[index]} listItemHoverHandler={listItemHoverHandler}/>;
  }

  return cards;
}

type CardsProps = {
  offers: offerType[];
  onCardHoover: React.MouseEventHandler<HTMLElement>;
};

function Cards({ offers, onCardHoover }: CardsProps): JSX.Element {
  const listItemHoverHandler = (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onCardHoover(evt.currentTarget.dataset.id); //TODO
  };

  return (
    <>
      {getCards(offers, listItemHoverHandler)}
    </>
  );
}

export default Cards;
