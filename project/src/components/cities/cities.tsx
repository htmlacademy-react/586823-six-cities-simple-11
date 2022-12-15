import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Point, Points } from '../../types/types';
import { getAllPoints } from '../../utils';
import Cards from '../cards/cards';
import Map from '../map/map';
import Sorting from '../sorting/sorting';

function Cities(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

  const points: Points = getAllPoints(offers);
  const currentCity = useAppSelector((state) => state.offers[0].city);
  const currentCityAdaptive = {
    name: currentCity.name,
    latitude: currentCity.location.latitude,
    longitude: currentCity.location.longitude,
    zoom: currentCity.location.zoom,
  };

  const [selectedPoint, setSelectedPoint] = useState({});

  function handleCardHover(cardId: string) {
    const currentPoint = points.find((point) =>
      point.id === Number(cardId),
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
          <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
          <Sorting />
          <div className="cities__places-list places__list tabs__content">
            <Cards onCardHoover={handleCardHover}/>
          </div>
        </section>
        <div className="cities__right-section">
          <Map city={currentCityAdaptive} points={points} selectedPoint={selectedPoint as Point || undefined} />
        </div>
      </div>
    </div>
  );
}

export default Cities;
