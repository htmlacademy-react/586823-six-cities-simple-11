import { useState } from 'react';
import { SortingTypes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortType, getOffersAction } from '../../store/actions/action';
import classNames from 'classnames';

function Sorting(): JSX.Element {
  const [isSortingOpen, setSortingStatus] = useState(false);
  const dispatch = useAppDispatch();
  const sortType = useAppSelector((state) => state.sortType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" onClick={() => { setSortingStatus(!isSortingOpen); }}>
        {SortingTypes[sortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options places__options--custom', isSortingOpen ? 'places__options--opened' : '')}>
        <li className="places__option places__option--active" onClick={() => {
          dispatch(changeSortType(SortingTypes.Popular));

          dispatch(getOffersAction());
        }}
        >
          Popular
        </li>

        <li className="places__option" onClick={() => {
          dispatch(changeSortType(SortingTypes.LowHigh));
          dispatch(getOffersAction());
        }}
        >
          Price: low to high
        </li>

        <li className="places__option" onClick={() => {
          dispatch(changeSortType(SortingTypes.HighLow));
          dispatch(getOffersAction());
        }}
        >
          Price: high to low
        </li>

        <li className="places__option" onClick={() => {
          dispatch(changeSortType(SortingTypes.TopRated));
          dispatch(getOffersAction());
        }}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}

export default Sorting;
