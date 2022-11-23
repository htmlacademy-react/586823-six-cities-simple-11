import { offerType } from '../../mocks/offers';
import PlaceCard from '../place-card/place-card';

type CardType = {
  offer: offerType;
  listItemHoverHandler(id: string): void;
};

function Card({ offer, listItemHoverHandler }: CardType): JSX.Element {
  const { isPremium, id } = offer;

  return (
    <article className="cities__card place-card" onMouseEnter={() => listItemHoverHandler(id.toString())} data-id={id}>
      <div className="place-card__mark">
        <span>{isPremium === true ? 'Premium' : 'Standart'}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={`img/apartment-0${id}.jpg`}
            width="260"
            height="200"
            alt="Place"
          />
        </a>
      </div>
      <PlaceCard offer={offer} />
    </article>
  );
}

export default Card;
