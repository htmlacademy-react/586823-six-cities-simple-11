import { offerType } from '../../mocks/offers';
import Card from '../card/card';

type CardsProps = {
  offers: offerType[];
  onCardHoover(id: string): void;
};

function Cards({ offers, onCardHoover }: CardsProps): JSX.Element {
  const listItemHoverHandler = (id: string) => {
    onCardHoover(id);
  };

  return (
    <>
      {offers.map((offer) => <Card key={offer.id.toString()} offer={offer} listItemHoverHandler={listItemHoverHandler}/>)}
    </>
  );
}

export default Cards;
