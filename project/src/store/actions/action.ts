import { createAction } from '@reduxjs/toolkit';
import { SortingTypes } from '../../const';


const changeCityAction = createAction('changeCity', (value: string) => ({
  payload: value,
  currentTime: new Date().getTime(),
}));

const changeSortType = createAction('changeSortType', (value: SortingTypes) => ({
  payload: value,
  currentTime: new Date().getTime(),
}));

const getOffersAction = createAction('getOffers');

export { changeCityAction, getOffersAction, changeSortType };
