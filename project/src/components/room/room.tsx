import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurrentRoomId } from '../../store/actions/action';
import { fetchAllRoomInfo } from '../../store/actions/api-action';
import { commentType, Point, Points } from '../../types/types';
import { getAllPoints } from '../../utils';
import Error404 from '../error-404/error-404';
import Header from '../header/header';
import Map from '../map/map';
import PlacesNear from '../places-near/places-near';
import ReviewForm from '../review-form/review-form';
import Reviews from '../reviews/reviews';

function generateGoods (goods: [string]) : JSX.Element[] {
  const result: JSX.Element[] = [];
  for (let index = 0; index < goods.length; index++) {
    result[index] = <li className="property__inside-item" key={`goods-${index}`}>{goods[index]}</li>;
  }

  return result;
}

function Room() {
  const room = useAppSelector((state) => state.room);
  const offersNear = useAppSelector((state) => state.offersNear);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const comments = useAppSelector((state) => state.comments);
  const dispatch = useAppDispatch();
  const params = useParams();
  const [selectedPoint, setSelectedPoint] = useState({});
  const [points, setPoints] = useState<Points>([]);


  useEffect(() => {
    dispatch(setCurrentRoomId(Number(params.id)));
    dispatch(fetchAllRoomInfo());
  }, [dispatch, params.id]);

  useEffect(() => {
    if (room !== undefined) {
      setPoints(getAllPoints(offersNear));
    }
  }, [offersNear, room]);
  if (room === undefined || room === null) {
    return <Error404 />;
  }

  const {
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
  } = room;

  const offerComments: commentType[] = comments;

  function onCardHoover(cardId: string) {
    const currentPoint = points.find((point) =>
      point.id === Number(cardId),
    );
    if (currentPoint) {
      setSelectedPoint(currentPoint);
    }
  }

  const listItemHoverHandler = (offerId: string) => {
    onCardHoover(offerId);
  };

  return (
    <React.Fragment>
      <Header />
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
              <Reviews />
              {authorizationStatus ? <ReviewForm /> : ''}
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map city={{
            name: city.name,
            latitude: city.location.latitude,
            longitude: city.location.longitude,
            zoom: city.location.zoom
          }} points={points} selectedPoint={selectedPoint as Point || undefined}
          />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {offersNear.map((offer) => <PlacesNear key={offer.id.toString()} offer={offer} listItemHoverHandler={listItemHoverHandler}/>)}
          </div>
        </section>
      </div>
    </React.Fragment>

  );
}

export default Room;
