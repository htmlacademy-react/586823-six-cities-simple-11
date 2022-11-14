import React from 'react';
import { offerType } from '../../mocks/offers';
import Cards from '../cards/cards';
import Map from '../map/map';
import Sorting from '../sorting/sorting';

type CitiesProps = {
  offers: offerType[];
};

let activeOfferId: number;


function Cities({ offers }: CitiesProps): JSX.Element {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <Sorting />
          <div className="cities__places-list places__list tabs__content" onClick={(evt) => {
            const target = evt.target as Element;
            if (target.closest('.place-card')) {
              activeOfferId = target.closest('.place-card')?.dataset.id;
            }
          }}
          >
            <Cards offers={offers} />
          </div>
        </section>
        <div className="cities__right-section">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Cities;
