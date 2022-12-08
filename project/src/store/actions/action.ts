import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortingTypes } from '../../const';
import { commentType, offerType } from '../../types/types';


const changeCityAction = createAction('changeCity', (value: string) => ({
  payload: value,
  currentTime: new Date().getTime(),
}));

const changeSortTypeAction = createAction('changeSortType', (value: SortingTypes) => ({
  payload: value,
  currentTime: new Date().getTime(),
}));

const getOffersAction = createAction<offerType[]>('data/offers');

const getCommentsAction = createAction<commentType[]>('data/comments');

const requireAuthorizationStatusAction = createAction<AuthorizationStatus>('authorization');

const setOffersDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

const setError = createAction<string | null>('setError');

const setActiveRoomId = createAction<number | null>('activeRoomId');

export { changeCityAction, setActiveRoomId, setError, changeSortTypeAction, getOffersAction, requireAuthorizationStatusAction, setOffersDataLoadingStatus, getCommentsAction};
