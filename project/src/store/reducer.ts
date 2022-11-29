import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, getOffersAction } from './actions/action';
import { offers, offerType } from '../mocks/offers';

type initializeStateType = {
  city: string;
  offers: offerType[];
}

const initializeState: initializeStateType = {
  city: 'Paris',
  offers: offers,
};

export const reducer = createReducer(initializeState, (builder) => {
  builder.addCase(getOffersAction, (state) => {
    const cityOffers: offerType[] = offers.filter((offer) => offer.city.name === state.city);
    state.offers = cityOffers;
  })
    .addCase(changeCityAction, (state, city) => {
      state.city = city.payload;
    });
});
