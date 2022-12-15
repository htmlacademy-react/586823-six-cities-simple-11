import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortingTypes } from '../../const';
import { commentType, offerType } from '../../types/types';


export const changeCityAction = createAction('changeCity', (value: string) => ({
  payload: value,
  currentTime: new Date().getTime(),
}));

export const changeSortTypeAction = createAction('changeSortType', (value: SortingTypes) => ({
  payload: value,
  currentTime: new Date().getTime(),
}));

export const getOffersAction = createAction<offerType[]>('data/offers');

export const getCommentsAction = createAction<commentType[]>('data/comments');

export const requireAuthorizationStatusAction = createAction<AuthorizationStatus>('authorization');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

export const setError = createAction<string | null>('setError');

export const getRoomAction = createAction<offerType>('data/room');

export const setCurrentRoomId = createAction<number | null>('setCurrentRoomId');

export const getOffersNearAction = createAction<offerType[]>('data/offersNear');

export const setSortingStatus = createAction<boolean>('mainScreen/setSortingStatus');
