import { City } from './types/types';

enum Paths {
  MainScreen = '/',
  Login = '/login',
  Offer = '/offer/:id'
}

const AMSTERDAM_CITY: City = {
  latitude: 52.3740300,
  longitude: 4.8896900,
  zoom: 10,
  name: 'Amsterdam',
};

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export { Paths, AMSTERDAM_CITY, URL_MARKER_DEFAULT, URL_MARKER_CURRENT };
