import React from 'react';
import { useParams } from 'react-router-dom';
import { commentType } from '../../mocks/comments';
import { offerType } from '../../mocks/offers';
import Error404 from '../error-404/error-404';
import Map from '../map/map';
import ReviewForm from '../review-form/review-form';
import Reviews from '../reviews/reviews';

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

function Room({ rooms, comments }: roomsType) {
  const params = useParams();
  const room: offerType | undefined = rooms.find((roomItem) => roomItem.id === Number(params.id));
  const offerComments: commentType[] = comments[Number(params.id)];
  if (room === undefined) {
    return <Error404 />;
  }
  const {
    id,
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
  } = room;

  return (
    <React.Fragment>
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
              <Reviews offerComments={comments[id]} />
              <ReviewForm />
            </section>
          </div>
        </div> {/*TODO места не подалёку*/}
        <section className="property__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;80</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: `${rating * 20}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Wood and stone place</a>
                </h2>
                <p className="place-card__type">Private room</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;132</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: `${rating * 20}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Canal View Prinsengracht</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>

            <article className="near-places__card place-card">
              <div className="place-card__mark">
                <span>Premium</span>
              </div>
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image"/>
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;180</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{ width: '100%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Nice, cozy, warm big bed apartment</a>
                </h2>
                <p className="place-card__type">Apartment</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </React.Fragment>

  );
}

export default Room;
