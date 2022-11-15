type offerType = {
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  description: string;
  goods: [string];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: [string];
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

const offers: offerType[] = [
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/1.png',
      id: 1,
      isPro: true,
      name: 'Kimberley',
    },
    id: 0,
    images: ['img/1.png'],
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 1,
    previewImage: 'img/1.png',
    price: 393,
    rating: 3.3,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/1.png',
      id: 1,
      isPro: true,
      name: 'Erika',
    },
    id: 1,
    images: ['img/1.png'],
    isPremium: true,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/1.png',
    price: 3802,
    rating: 2.3,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/1.png',
      id: 1,
      isPro: false,
      name: 'Carmella',
    },
    id: 2,
    images: ['img/1.png'],
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/1.png',
    price: 3975,
    rating: 3.7,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/1.png',
      id: 1,
      isPro: false,
      name: 'Amy',
    },
    id: 3,
    images: ['img/1.png'],
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/1.png',
    price: 66,
    rating: 0.2,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
];

export { offers };
export type { offerType };

