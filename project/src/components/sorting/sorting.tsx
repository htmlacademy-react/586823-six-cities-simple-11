import { SortingTypes } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeSortType, getOffersAction } from '../../store/actions/action';

function Sorting(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" >
        Popular
        <svg onClick={() => {
          const placesOptions = document.querySelector('.places__options');
          if (placesOptions) {
            placesOptions.classList.toggle('places__options--opened');
          }
        }} className="places__sorting-arrow" width="7" height="4"
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom">
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
