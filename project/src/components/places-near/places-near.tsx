import { offerType } from '../../mocks/offers';
import PlaceCard from '../place-card/place-card';

type PlacesNearType = {
  offer: offerType;
  onCardHoover: React.MouseEventHandler<HTMLElement>;
};

function PlacesNear({ offer, onCardHoover }: PlacesNearType): JSX.Element {
  const { id } = offer;

  const listItemHoverHandler = (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onCardHoover(evt.currentTarget.dataset.id); //TODO
  };

  return (
    <article className="near-places__card place-card" onMouseEnter={listItemHoverHandler} data-id={id}>
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="" />
        </a>
      </div>
      <PlaceCard offer={offer} />
    </article>

  );
}

export default PlacesNear;
