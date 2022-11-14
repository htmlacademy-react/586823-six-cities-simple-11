type commentType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
};

const comments: commentType[][] = [
  [
    {
      'comment': 'We loved it so much, the house, the veiw, the location just great.. \t\tHighly reccomend :)',
      'date': '2022-10-10T13:58:46.499Z',
      'id': 0,
      'rating': 4.96,
      'user': {
        'avatarUrl': 'https://11.react.pages.academy/static/avatar/1.jpg',
        'id': 7,
        'isPro': true,
        'name': 'Downs',
      },
    }
  ],
  [
    {
      'id': 0,
      'user': {
        'id': 7,
        'isPro': true,
        'name': 'Clayton',
        'avatarUrl': 'https://11.react.pages.academy/static/avatar/10.jpg'
      },
      'rating': 1.64,
      'comment': 'We loved it so much, the house, the veiw, the location just great.. \t\tHighly reccomend :)',
      'date': '2022-10-10T13:58:46.499Z'
    },
    {
      'id': 1,
      'user': {
        'id': 7,
        'isPro': true,
        'name': 'Odom',
        'avatarUrl': 'https://11.react.pages.academy/static/avatar/6.jpg'
      },
      'rating': 4.69,
      'comment': 'We loved it so much, the house, the veiw, the location just great.. \t\tHighly reccomend :)',
      'date': '2022-10-10T13:58:46.499Z'
    },
    {
      'id': 2,
      'user': {
        'id': 6,
        'isPro': false,
        'name': 'Saunders',
        'avatarUrl': 'https://11.react.pages.academy/static/avatar/7.jpg'
      },
      'rating': 4.55,
      'comment': 'We loved it so much, the house, the veiw, the location just great.. \t\tHighly reccomend :)',
      'date': '2022-10-10T13:58:46.499Z'
    },
    {
      'id': 3,
      'user': {
        'id': 6,
        'isPro': true,
        'name': 'Jayne',
        'avatarUrl': 'https://11.react.pages.academy/static/avatar/1.jpg'
      },
      'rating': 4.34,
      'comment': 'We loved it so much, the house, the veiw, the location just great.. \t\tHighly reccomend :)',
      'date': '2022-10-10T13:58:46.499Z'
    }
  ],
  [
    {
      'id': 4,
      'user': {
        'id': 5,
        'isPro': false,
        'name': 'Whitehead',
        'avatarUrl': 'https://11.react.pages.academy/static/avatar/2.jpg'
      },
      'rating': 4.63,
      'comment': 'We loved it so much, the house, the veiw, the location just great.. \t\tHighly reccomend :)',
      'date': '2022-10-10T13:58:46.499Z'
    }
  ],
  [
    {
      'id': 0,
      'user': {
        'id': 5,
        'isPro': true,
        'name': 'Kimberley',
        'avatarUrl': 'https://11.react.pages.academy/static/avatar/9.jpg'
      },
      'rating': 1.74,
      'comment': 'We loved it so much, the house, the veiw, the location just great.. \t\tHighly reccomend :)',
      'date': '2022-10-10T13:58:46.499Z'
    },
    {
      'id': 1,
      'user': {
        'id': 3,
        'isPro': false,
        'name': 'Ladonna',
        'avatarUrl': 'https://11.react.pages.academy/static/avatar/1.jpg'
      },
      'rating': 4.55,
      'comment': 'We loved it so much, the house, the veiw, the location just great.. \t\tHighly reccomend :)',
      'date': '2022-10-10T13:58:46.499Z'
    },
    {
      'id': 2,
      'user': {
        'id': 8,
        'isPro': true,
        'name': 'Tricia',
        'avatarUrl': 'https://11.react.pages.academy/static/avatar/0.jpg'
      },
      'rating': 2.34,
      'comment': 'We loved it so much, the house, the veiw, the location just great.. \t\tHighly reccomend :)',
      'date': '2022-10-10T13:58:46.499Z'
    },
    {
      'id': 3,
      'user': {
        'id': 8,
        'isPro': false,
        'name': 'Esther',
        'avatarUrl': 'https://11.react.pages.academy/static/avatar/3.jpg'
      },
      'rating': 1.07,
      'comment': 'We loved it so much, the house, the veiw, the location just great.. \t\tHighly reccomend :)',
      'date': '2022-10-10T13:58:46.499Z'
    }
  ]
];

export { comments };
export type { commentType };
