import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../../const';
import { dropToken, setToken } from '../../services/token';
import { AuthData, FetchCommentsParms, FetchOffersNearParms, FetchRoomParms } from '../../types/auth-data';
import { AppDispatch, State } from '../../types/state';
import { addCommentType, commentType, offerType } from '../../types/types';
import { UserData } from '../../types/user-data';
import { getCommentsAction, getOffersAction, getOffersNearAction, getRoomAction, requireAuthorizationStatusAction, setError, setOffersDataLoadingStatus} from './action';
import {store} from '../index';
import { setEmail } from '../../services/email';

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

export const fetchGetRoom = createAsyncThunk<void, FetchRoomParms, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchGetRoom',
  async ({offerId}, { dispatch, extra: api }) => {
    const { data } = await api.get<offerType>(`${ApiRoute.Hotels}/${offerId}`);
    dispatch(getRoomAction(data));
  }
);

export const fetchGetOffersNear = createAsyncThunk<void, FetchOffersNearParms, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchGetOffersNear',
  async ({offerId}, { dispatch, extra: api }) => {
    const { data } = await api.get<offerType[]>(`${ApiRoute.Hotels}/${offerId}/nearby`);
    dispatch(getOffersNearAction(data));
  }
);

export const fetchGetComments = createAsyncThunk<void, FetchCommentsParms, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchGetComments',
  async ({offerId}, { dispatch, extra: api }) => {
    const { data } = await api.get<commentType[]>(`${ApiRoute.Comments}/${offerId}`);
    dispatch(getCommentsAction(data));
  }
);

export const fetchAllRoomInfo = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/allRoomInfo',
  async (_args, { dispatch}) => {
    const id = store.getState().currentRoomId;
    if (id !== null) {
      await dispatch(fetchGetRoom({ offerId: id }));
      await dispatch(fetchGetComments({offerId: id}));
      await dispatch(fetchGetOffersNear({ offerId: id }));
    }
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
     setEmail(email);
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

export const addComment = createAsyncThunk<void, addCommentType, {
   dispatch: AppDispatch;
   state: State;
   extra: AxiosInstance;
 }>(
   'addComment',
   async ({ commentContainer, offerId }, { dispatch, extra: api }) => {
     const { data } = await api.post<commentType[]>(`${ApiRoute.Comments}/${offerId}`, {...commentContainer});
     dispatch(getCommentsAction(data));
   },
 );
