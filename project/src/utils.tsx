import { offerType, Point, Points } from './types/types';

function getAllPoints(offers: offerType[]): Points {
  const result: Points = [];
  offers.forEach((offer, i) => {
    const point: Point = {
      'latitude': offer.location.latitude,
      'longitude': offer.location.longitude,
      'id': offer.id,
    };
    result[i] = point;
  });
  return result;
}

export { getAllPoints };
