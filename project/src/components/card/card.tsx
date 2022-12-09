import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { setActiveRoomId } from '../../store/actions/action';
import { fetchGetComments } from '../../store/actions/api-action';
import { offerType } from '../../types/types';
import PlaceCard from '../place-card/place-card';

type CardType = {
  offer: offerType;
  listItemHoverHandler(id: string): void;
};

function Card({ offer, listItemHoverHandler }: CardType): JSX.Element {
  const dispatch = useAppDispatch();
  const { isPremium, id, previewImage} = offer;

  return (
    <Link to={`/offer/${id}`}>
      <article className="cities__card place-card" onMouseEnter={() => listItemHoverHandler(id.toString())} data-id={id} onClick={() => {
        dispatch(setActiveRoomId(id));
        dispatch(fetchGetComments());
      }}
      >
        <div className="place-card__mark">
          <span>{isPremium === true ? 'Premium' : 'Standart'}</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">

          <img
            className="place-card__image"
            src={`${previewImage}`}
            width="260"
            height="200"
            alt="Place"
          />
        </div>
        <PlaceCard offer={offer} />
      </article>
    </Link>

  );
}

export default Card;
