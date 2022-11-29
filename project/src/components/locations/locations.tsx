import React from 'react';
import { Link } from 'react-router-dom';
import { changeCityAction, getOffersAction } from '../../store/actions/action';
import { useAppDispatch } from '../../hooks';

type locationsType = {
  cities: string[];
}

function Locations({ cities }: locationsType): JSX.Element {
  const dispatch = useAppDispatch();
  const OnCityClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    const city: string = evt.currentTarget.textContent ? evt.currentTarget.textContent : '';
    dispatch(changeCityAction(city));
    dispatch(getOffersAction());
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li key={city} className="locations__item">
            <Link className="locations__item-link tabs__item" to="#" onClick={OnCityClick}>
              <span>{city}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Locations;
