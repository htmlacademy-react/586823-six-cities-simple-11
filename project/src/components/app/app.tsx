import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Paths } from '../../const';
import { offerType } from '../../mocks/offers';
import MainScreen from '../../pages/main-screen';
import Error404 from '../error-404/error-404';
import Login from '../login/login';
import Room from '../room/room';

type AppProps = {
  offers: offerType[];
};

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.MainScreen}>
          <Route index element={<MainScreen offers={offers} />} />
          <Route path={Paths.Login} element={<Login />} />
          <Route path={Paths.Offer} element={<Room rooms={offers} />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
