import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Paths } from '../../const';
import { useAppDispatch } from '../../hooks';
import { commentType } from '../../mocks/comments';
import MainScreen from '../../pages/main-screen';
import { getOffersAction } from '../../store/actions/action';
import Error404 from '../error-404/error-404';
import Login from '../login/login';
import Room from '../room/room';

type AppProps = {
  comments: commentType[][];
};

function App({ comments }: AppProps): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(getOffersAction());
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.MainScreen}>
          <Route index element={<MainScreen />} />
          <Route path={Paths.Login} element={<Login />} />
          <Route path={Paths.Offer} element={<Room comments={comments} />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
