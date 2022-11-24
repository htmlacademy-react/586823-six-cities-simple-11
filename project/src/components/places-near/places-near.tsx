import { Link } from 'react-router-dom';
import { offerType } from '../../mocks/offers';
import PlaceCard from '../place-card/place-card';

type PlacesNearType = {
  offer: offerType;
  listItemHoverHandler(offerId: string): void;
};

function PlacesNear({ offer, listItemHoverHandler}: PlacesNearType): JSX.Element {
  const { id } = offer;

  return (
    <article className="near-places__card place-card" onMouseEnter={() => listItemHoverHandler(id.toString())} data-id={id}>
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`} onClick={() => {
          window.scrollTo(0, 0);
        }}
        >
          <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="" />
        </Link>
      </div>
      <PlaceCard offer={offer}/>
    </article>

  );
}

export default PlacesNear;
