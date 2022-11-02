import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Paths } from '../../const';
import MainScreen from '../../pages/main-screen';
import Error404 from '../error-404/error-404';
import Login from '../login/login';
// import Room from '../room/room';

type AppProps = {
  offersCount: number;
};

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.MainScreen}>
          <Route index element={<MainScreen offersCount={offersCount} />} />
          <Route path={Paths.Login} element={<Login />} />
          {/* <Route path={Paths.Offer} element={<Room tools={tools} />} /> */}
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
