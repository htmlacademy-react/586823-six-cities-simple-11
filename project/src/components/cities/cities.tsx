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
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <Sorting />
          <div className="cities__places-list places__list tabs__content">
            <Cards offers={offers} />
          </div>
        </section>
        <div className="cities__right-section">
          <Map city={AMSTERDAM_CITY} points={getAllPoints(offers)} selectedPoint={undefined} />
        </div>
      </div>
    </div>
  );
}

export default Cities;
