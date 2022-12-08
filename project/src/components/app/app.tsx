import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { Paths } from '../../const';
import { useAppSelector } from '../../hooks';
import MainScreen from '../../pages/main-screen';
import Error404 from '../error-404/error-404';
import HistoryRouter from '../history/history-route';
import LoadingScreen from '../loading-screen/loading-screen';
import Login from '../login/login';
import Room from '../room/room';

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={Paths.MainScreen}>
          <Route index element={<MainScreen />} />
          <Route path={Paths.Login} element={<Login />} />
          <Route path={Paths.Offer} element={<Room/>} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
