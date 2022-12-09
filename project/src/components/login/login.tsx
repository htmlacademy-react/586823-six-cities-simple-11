import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/actions/api-action';
import Header from '../header/header';
import { AuthData } from '../../types/auth-data';
import { Paths } from '../../const';

function Login(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const authorizationform = useRef(null);

  return (
    <React.Fragment>
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" ref={authorizationform} action="#" method="post" onSubmit={(evt) => {
              evt.preventDefault();
              if (authorizationform.current !== null) {
                const formData = new FormData(authorizationform.current);
                const login: AuthData = {
                  login: formData.get('email')?.toString() ?? '',
                  password: formData.get('password')?.toString() ?? '',
                };
                dispatch(loginAction(login));
                return navigator(Paths.MainScreen);
              }
            }}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>{currentCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Login;
