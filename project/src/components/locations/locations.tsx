import './locations.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { changeCityAction } from '../../store/actions/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CitiesNames } from '../../const';
import { fetchGetOffers } from '../../store/actions/api-action';
import classNames from 'classnames';

type locationsType = {
  cities: CitiesNames[];
}

function Locations({ cities }: locationsType): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);
  const handleCityClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    const city: string = evt.currentTarget.textContent ? evt.currentTarget.textContent : '';
    dispatch(changeCityAction(city));
    dispatch(fetchGetOffers());
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li key={city} className={classNames('locations__item', city === currentCity ? 'locations__item--active' : '')}>
            <Link className="locations__item-link tabs__item" to="#" onClick={handleCityClick}>
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
