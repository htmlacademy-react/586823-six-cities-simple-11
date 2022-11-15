import { useParams } from 'react-router-dom';
import { commentType } from '../../mocks/comments';
import { offerType } from '../../mocks/offers';
import Error404 from '../error-404/error-404';
import Map from '../map/map';
import ReviewForm from '../review-form/review-form';

type roomsType = {
  rooms: offerType[];
  comments: commentType[][];
};

function generateGoods (goods: [string]) : JSX.Element[] {
  const result: JSX.Element[] = [];
  for (let index = 0; index < goods.length; index++) {
    result[index] = <li className="property__inside-item" key={`goods-${index}`}>{goods[index]}</li>;
  }

  return result;
}

function generateComments(comments: commentType[]): JSX.Element[] {
  const result: JSX.Element[] = [];

  comments.forEach((commentObj, i) => {
    const {rating, user, comment, date, id} = commentObj;
    result[i] = (
      <li className="reviews__item" key={id.toString()}>
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img
              className="reviews__avatar user__avatar"
              src={user.avatarUrl}
              width="54"
              height="54"
              alt="Reviews avatar"
            />
          </div>
          <span className="reviews__user-name">{user.name}</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{ width: `${rating * 20}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {comment}
          </p>
          <time className="reviews__time" dateTime={date}>
            {new Date(date).toLocaleDateString('en-US')}
          </time>
        </div>
      </li>
    );
  });

  return result;
}

function Room({ rooms, comments }: roomsType) {
  const params = useParams();
  const room: offerType | undefined = rooms.find((roomItem) => roomItem.id === Number(params.id));
  const offerComments: commentType[] = comments[Number(params.id)];
  if (room === undefined) {
    return <Error404 />;
  }
  const {
    id,
    city,
    type,
    isPremium,
    bedrooms,
    maxAdults,
    price,
    title,
    rating,
    goods,
    description,
    host,
    location
  } = room;

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          <div className="property__image-wrapper">
            <img
              className="property__image"
              src="img/room.jpg"
              alt="PhotoStudio"
            />
          </div>
          <div className="property__image-wrapper">
            <img
              className="property__image"
              src="img/apartment-01.jpg"
              alt="PhotoStudio"
            />
          </div>
          <div className="property__image-wrapper">
            <img
              className="property__image"
              src="img/apartment-02.jpg"
              alt="PhotoStudio"
            />
          </div>
          <div className="property__image-wrapper">
            <img
              className="property__image"
              src="img/apartment-03.jpg"
              alt="PhotoStudio"
            />
          </div>
          <div className="property__image-wrapper">
            <img
              className="property__image"
              src="img/studio-01.jpg"
              alt="PhotoStudio"
            />
          </div>
          <div className="property__image-wrapper">
            <img
              className="property__image"
              src="img/apartment-01.jpg"
              alt="PhotoStudio"
            />
          </div>
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          <div className="property__mark">
            <span>{isPremium === true ? 'Premium' : 'Standart'}</span>
          </div>
          <div className="property__name-wrapper">
            <h1 className="property__name">{title}</h1>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{ width: `${rating * 20}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">
              {rating}
            </span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedrooms} {bedrooms > 1 ? 'Bedrooms' : 'Bedrooms'}
            </li>
            <li className="property__feature property__feature--adults">
              Max {maxAdults} {maxAdults > 1 ? 'adults' : 'adult'}
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">{generateGoods(goods)}</ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img
                  className="property__avatar user__avatar"
                  src="img/avatar-angelina.jpg"
                  width="74"
                  height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="property__user-name">{host.name}</span>
              <span className="property__user-status">
                {host.isPro ? 'Pro' : 'Standart'}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">{description}</p>
              <p className="property__text">
                An independent House, strategically located between Rembrand
                Square and National Opera, but where the bustle of the city
                comes to rest in this alley flowery and colorful.
              </p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">
              Reviews &middot; <span className="reviews__amount">{offerComments.length}</span>
            </h2>
            <ul className="reviews__list">
              {generateComments(offerComments)}
            </ul>
            <ReviewForm />
          </section>
        </div>
      </div>
      <section className="">
        <Map city={{
          'name': city.name,
          'latitude': city.location.latitude,
          'longitude': city.location.longitude,
          'zoom': city.location.zoom
        }} points={[{
          'latitude': location.latitude,
          'longitude': location.longitude,
          'id': id}]} selectedPoint={{
          'latitude': location.latitude,
          'longitude': location.longitude,
          'id': id}}
        />
      </section>
    </section>
  );
}

export default Room;
