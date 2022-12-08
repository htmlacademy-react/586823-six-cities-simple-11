import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../../const';
import { dropToken, setToken } from '../../services/token';
import { AuthData } from '../../types/auth-data';
import { AppDispatch, State } from '../../types/state';
import { commentType, offerType } from '../../types/types';
import { UserData } from '../../types/user-data';
import { getCommentsAction, getOffersAction, requireAuthorizationStatusAction, setError, setOffersDataLoadingStatus} from './action';
import {store} from '../index';

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const fetchGetOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchGetOffers',
  async (_args, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<offerType[]>(ApiRoute.Hotels);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(getOffersAction(data));
  }
);

export const fetchGetComments = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchGetComments',
  async (_args, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<commentType[]>(`${ApiRoute.Comments}/${store.getState().activeRoomId ?? ''}`);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(getCommentsAction(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
   dispatch: AppDispatch;
   state: State;
   extra: AxiosInstance;
 }>(
   'user/checkAuth',
   async (_arg, {dispatch, extra: api}) => {
     try {
       await api.get(ApiRoute.Login);
       dispatch(requireAuthorizationStatusAction(AuthorizationStatus.Authorisated));
     } catch {
       dispatch(requireAuthorizationStatusAction(AuthorizationStatus.Unknown));
     }
   },
 );

export const loginAction = createAsyncThunk<void, AuthData, {
   dispatch: AppDispatch;
   state: State;
   extra: AxiosInstance;
 }>(
   'user/login',
   async ({login: email, password}, {dispatch, extra: api}) => {
     const {data: {token}} = await api.post<UserData>(ApiRoute.Login, {email, password});
     setToken(token);
     dispatch(requireAuthorizationStatusAction(AuthorizationStatus.Authorisated));
   },
 );

export const logoutAction = createAsyncThunk<void, undefined, {
   dispatch: AppDispatch;
   state: State;
   extra: AxiosInstance;
 }>(
   'user/logout',
   async (_arg, {dispatch, extra: api}) => {
     await api.delete(ApiRoute.Logout);
     dropToken();
     dispatch(requireAuthorizationStatusAction(AuthorizationStatus.Unknown));
   },
 );

