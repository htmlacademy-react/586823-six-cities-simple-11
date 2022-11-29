import { useAppSelector } from '../../hooks';
import Card from '../card/card';

type CardsProps = {
  onCardHoover(id: string): void;
};

function Cards({ onCardHoover }: CardsProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

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
