import { createAction } from '@reduxjs/toolkit';


const changeCityAction = createAction('changeCity', (value: string) => ({
  payload: value,
  currentTime: new Date().getTime(),
}));

const getOffersAction = createAction('getOffers');

export { changeCityAction, getOffersAction };
