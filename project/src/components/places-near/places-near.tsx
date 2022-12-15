import { Link } from 'react-router-dom';
import { offerType } from '../../types/types';
import PlaceCard from '../place-card/place-card';

type PlacesNearType = {
  offer: offerType;
  listItemHoverHandler(offerId?: string): void | null;
};

const handleOfferClick = () => {
  window.scrollTo(0, 0);
};


function PlacesNear({ offer, listItemHoverHandler}: PlacesNearType): JSX.Element {
  const { id, previewImage } = offer;

  return (
    <article className="near-places__card place-card" onMouseEnter={() => {
      if (typeof listItemHoverHandler !== null) {
        listItemHoverHandler(id.toString());
      }
    }} data-id={id}
    >
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`} onClick={handleOfferClick}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="" />
        </Link>
      </div>
      <PlaceCard offer={offer}/>
    </article>

  );
}

export default PlacesNear;
