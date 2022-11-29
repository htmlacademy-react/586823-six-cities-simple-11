import { City } from './types/types';

enum Paths {
  MainScreen = '/',
  Login = '/login',
  Offer = '/offer/:id'
}

enum CitiesNames {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

const AMSTERDAM_CITY: City = {
  latitude: 52.3740300,
  longitude: 4.8896900,
  zoom: 10,
  name: CitiesNames.Amsterdam,
};

const CITIES_LIST: string[] = [CitiesNames.Paris, CitiesNames.Cologne, CitiesNames.Brussels, CitiesNames.Amsterdam, CitiesNames.Hamburg, CitiesNames.Dusseldorf,];

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export { Paths, AMSTERDAM_CITY, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, CITIES_LIST, CitiesNames};
