import { createReducer } from '@reduxjs/toolkit';
import { changeCityAction, changeSortTypeAction, getCommentsAction, getOffersAction, requireAuthorizationStatusAction, setActiveRoomId, setError, setOffersDataLoadingStatus } from './actions/action';
import { AuthorizationStatus, SortingTypes } from '../const';
import { commentType, offerType } from '../types/types';

type initializeStateType = {
  city: string;
  offers: offerType[];
  comments: commentType[];
  sortType: SortingTypes;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  activeRoomId: number | null;
  isOffersDataLoading: boolean;
};

const initializeState: initializeStateType = {
  city: 'Paris',
  offers: [],
  comments: [],
  sortType: SortingTypes.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  activeRoomId: null,
};

export const reducer = createReducer(initializeState, (builder) => {
  builder.addCase(getOffersAction, (state, action) => {
    const cityOffers: offerType[] = action.payload.filter((offer: offerType) => offer.city.name === state.city);

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
    .addCase(changeSortTypeAction, (state, sortType) => {
      state.sortType = sortType.payload;
    })
    .addCase(getCommentsAction, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(requireAuthorizationStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setActiveRoomId, (state, action) => {
      state.activeRoomId = action.payload;
    });
});
