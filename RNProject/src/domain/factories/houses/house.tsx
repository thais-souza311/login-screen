import {HouseLayout} from '../../models';

export const makeHousesFactorie = (): HouseLayout[] => {
  return [
    {
      houseDescription: 'null',
      houseImage: '../src/assets/',
      houseAddress: 'Alabama Street, 657',
      houseValue: 'U$ 35.000,000',
      houseType: 'Family House',
    },
  ];
};
