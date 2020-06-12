var horizontalFlatListStatus = {
  rainy: {
    android: 'md-rainy',
    ios: 'ios-rainy',
  },
  cloud: {
    android: 'md-cloud',
    ios: 'ios-cloud',
  },
  suny: {
    android: 'md-suny',
    ios: 'ios-suny',
  },
  thunderstorm: {
    android: 'md-thunderstorm',
    ios: 'ios-thunderstorm',
  },
  flash: {
    android: 'md-flash',
    ios: 'ios-flash',
  },
};

var horizontalFlatListData = [
  {
    hour: '1 Am',
    status: horizontalFlatListStatus.rainy,
    degress: 20,
  },
  {
    hour: '2 Am',
    status: horizontalFlatListStatus.flash,
    degress: 20,
  },
  {
    hour: '3 Am',
    status: horizontalFlatListStatus.flash,
    degress: 20,
  },
  {
    hour: '4 Am',
    status: horizontalFlatListStatus.flash,
    degress: 32,
  },
  {
    hour: '5 Am',
    status: horizontalFlatListStatus.flash,
    degress: 12,
  },
  {
    hour: '6 Am',
    status: horizontalFlatListStatus.thunderstorm,
    degress: 23,
  },
  {
    hour: '7 Am',
    status: horizontalFlatListStatus.thunderstorm,
    degress: 43,
  },
  {
    hour: '8 Am',
    status: horizontalFlatListStatus.rainy,
    degress: 12,
  },
  {
    hour: '9 Am',
    status: horizontalFlatListStatus.rainy,
    degress: 33,
  },
  {
    hour: '10 Am',
    status: horizontalFlatListStatus.cloud,
    degress: 22,
  },
  {
    hour: '11 Am',
    status: horizontalFlatListStatus.cloud,
    degress: 60,
  },
  {
    hour: '12 Am',
    status: horizontalFlatListStatus.cloud,
    degress: 30,
  },
];
export {horizontalFlatListData};
export {horizontalFlatListStatus};
