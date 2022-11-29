import React from 'react';
import Cities from '../components/cities/cities';
import Header from '../components/header/header';
import Locations from '../components/locations/locations';
import { CITIES_LIST } from '../const';

function MainScreen(): JSX.Element {
  return (
    <React.Fragment>
      <Header isLogged />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations cities={CITIES_LIST} />
        </div>
        <Cities />
      </main>
    </React.Fragment>
  );
}

export default MainScreen;
