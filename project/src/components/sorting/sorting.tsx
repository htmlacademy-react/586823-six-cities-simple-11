import { SortingTypes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortTypeAction } from '../../store/actions/action';
import { fetchGetOffers } from '../../store/actions/api-action';
import classNames from 'classnames';

function Sorting(): JSX.Element {
  const isSortingOpen = useAppSelector((state) => state.isSortingOpen);
  const dispatch = useAppDispatch();
  const sortType: SortingTypes = useAppSelector((state) => state.sortType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type">
        {SortingTypes[sortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options places__options--custom', isSortingOpen ? 'places__options--opened' : '')}>
        <li className={classNames('places__option', sortType === SortingTypes.Popular ? 'places__option--active' : '')} onClick={() => {
          dispatch(changeSortTypeAction(SortingTypes.Popular));

          dispatch(fetchGetOffers());
        }}
        >
          Popular
        </li>

        <li className={classNames('places__option', sortType === SortingTypes.LowHigh ? 'places__option--active' : '')} onClick={() => {
          dispatch(changeSortTypeAction(SortingTypes.LowHigh));
          dispatch(fetchGetOffers());
        }}
        >
          Price: low to high
        </li>

        <li className={classNames('places__option', sortType === SortingTypes.HighLow ? 'places__option--active' : '')} onClick={() => {
          dispatch(changeSortTypeAction(SortingTypes.HighLow));
          dispatch(fetchGetOffers());
        }}
        >
          Price: high to low
        </li>

        <li className={classNames('places__option', sortType === SortingTypes.TopRated ? 'places__option--active' : '')} onClick={() => {
          dispatch(changeSortTypeAction(SortingTypes.TopRated));
          dispatch(fetchGetOffers());
        }}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}

export default Sorting;
