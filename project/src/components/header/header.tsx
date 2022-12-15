import { AnyAction, Dispatch, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Link } from 'react-router-dom';
import { AuthorizationStatus, Paths } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getEmail } from '../../services/email';
import { logoutAction } from '../../store/actions/api-action';
import { initializeStateType } from '../../store/reducer';

function getContent(isLogged: AuthorizationStatus, dispatch: ThunkDispatch<initializeStateType, AxiosInstance, AnyAction> & Dispatch<AnyAction>) {
  if (isLogged === AuthorizationStatus.Authorisated) {
    return (
      <>
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">
              {getEmail()}
            </span>
          </div>
        </li>
        <li className="header__nav-item">
          <Link to={Paths.MainScreen} onClick={() => {
            dispatch(logoutAction());
          }}
          >
            <span className="header__signout">Sign out
            </span>
          </Link>
        </li>
      </>
    );
  } else {
    return (
      <li className="header__nav-item user">
        <Link to={Paths.Login} className="header__nav-link header__nav-link--profile" >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
    );
  }
}

function account(isLogged: AuthorizationStatus, dispatch: ThunkDispatch<initializeStateType, AxiosInstance, AnyAction> & Dispatch<AnyAction>) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">{getContent(isLogged, dispatch)}</ul>
    </nav>
  );
}

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={Paths.MainScreen} className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          {account(authorizationStatus, dispatch)}
        </div>
      </div>
    </header>
  );
}

export default Header;
