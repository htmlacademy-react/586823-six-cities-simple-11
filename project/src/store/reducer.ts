import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, changeSortType, getOffersAction } from './actions/action';
import { offers, offerType } from '../mocks/offers';
import { SortingTypes } from '../const';

type initializeStateType = {
  city: string;
  offers: offerType[];
  sortType: SortingTypes;
}

const initializeState: initializeStateType = {
  city: 'Paris',
  offers: offers,
  sortType: SortingTypes.Popular,
};

export const reducer = createReducer(initializeState, (builder) => {
  builder.addCase(getOffersAction, (state) => {
    const cityOffers: offerType[] = offers.filter((offer) => offer.city.name === state.city);

    switch (state.sortType) {
      case SortingTypes.Popular:
        state.offers = cityOffers;
        break;
      case SortingTypes.HighLow:
        state.offers = cityOffers.sort((a, b) => {
          const aOfferPrice = a.price;
          const bOfferPrice = b.price;
          return bOfferPrice - aOfferPrice;
        });
        break;
      case SortingTypes.LowHigh:
        state.offers = cityOffers.sort((a, b) => {
          const aOfferPrice = a.price;
          const bOfferPrice = b.price;
          return aOfferPrice - bOfferPrice;
        });
        break;
      case SortingTypes.TopRated:
        state.offers = cityOffers.sort((a, b) => {
          const aOfferRate = a.rating;
          const bOfferRate = b.rating;
          return bOfferRate - aOfferRate;
        });
        break;
    }
  })
    .addCase(changeCityAction, (state, city) => {
      state.city = city.payload;
    })
    .addCase(changeSortType, (state, sortType) => {
      state.sortType = sortType.payload;
    });
});
