import { IMyObject } from './interfaces';

interface ICarsApi {
  getCars: () => IMyObject
}

export const carsApi: ICarsApi = {
  getCars: () => ({
    order_id: 'uuid for order'
  })
};
