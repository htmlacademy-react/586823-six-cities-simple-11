import { useState } from 'react';
import { AMSTERDAM_CITY } from '../../const';
import { offerType } from '../../mocks/offers';
import { Point, Points } from '../../types/types';
import Cards from '../cards/cards';
import Map from '../map/map';
import Sorting from '../sorting/sorting';

type CitiesProps = {
  offers: offerType[];
};

function getAllPoints(offers: offerType[]): Points {
  const result: Points = [];
  offers.forEach((offer, i) => {
    const point: Point = {
      'latitude': offer.location.latitude,
      'longitude': offer.location.longitude,
      'id': offer.id,
    };
    result[i] = point;
  });
  return result;
}


function Cities({ offers }: CitiesProps): JSX.Element {
  const points: Points = getAllPoints(offers);

  const [selectedPoint, setSelectedPoint] = useState({});

  function onCardHoover(card: React.MouseEvent) {
    const currentPoint = points.find((point) =>
      point.id === Number(card),
    );
    if (currentPoint) {
      setSelectedPoint(currentPoint);
    }
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <Sorting />
          <div className="cities__places-list places__list tabs__content">
            <Cards offers={offers} onCardHoover={onCardHoover}/>
          </div>
        </section>
        <div className="cities__right-section">
          <Map city={AMSTERDAM_CITY} points={points} selectedPoint={selectedPoint as Point || undefined} />
        </div>
      </div>
    </div>
  );
}

export default Cities;
