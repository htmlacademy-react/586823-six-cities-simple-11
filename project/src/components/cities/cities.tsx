import Card from '../card/card';
import Map from '../map/map';
import Sorting from '../sorting/sorting';

type CitiesProps = {
  offersCount: number;
};

function getCards(offersCount: number): JSX.Element[] {
  const cards: JSX.Element[] = [];
  for (let index = 0; index < offersCount; index++) {
    cards[index] = <Card />;
  }

  return cards;
}

function Cities({ offersCount }: CitiesProps): JSX.Element {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <Sorting />
          <div className="cities__places-list places__list tabs__content">
            {getCards(offersCount)}
          </div>
        </section>
        <div className="cities__right-section">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Cities;
