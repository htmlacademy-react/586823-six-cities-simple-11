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

enum SortingTypes {
  Popular,
  LowHigh,
  HighLow,
  TopRated,
}

enum AuthorizationStatus {
  Unknown,
  Authorisated,
}

enum ApiRoute {
  Hotels = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

const AMSTERDAM_CITY: City = {
  latitude: 52.3740300,
  longitude: 4.8896900,
  zoom: 10,
  name: CitiesNames.Amsterdam,
};

const CITIES_LIST: CitiesNames[] = [CitiesNames.Paris, CitiesNames.Cologne, CitiesNames.Brussels, CitiesNames.Amsterdam, CitiesNames.Hamburg, CitiesNames.Dusseldorf,];

const URL_MARKER_DEFAULT =
  'img/pin.svg';

const URL_MARKER_CURRENT =
  'img/pin-active.svg';

const TIMEOUT_SHOW_ERROR = 2000;

export { Paths, AMSTERDAM_CITY, TIMEOUT_SHOW_ERROR, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, CITIES_LIST, CitiesNames, SortingTypes, AuthorizationStatus, ApiRoute};
