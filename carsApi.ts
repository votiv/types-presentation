import { IMyObject } from './interfaces';

interface ICarsApi {
  getCars: () => IMyObject
}

export const carsApi: ICarsApi = {
  getCars: () => ({
    order_id: 'uuid for order',
    order_description: 'order description',
    cars: [{
      car_id: 'yolo string',
      image: 'intellisense is awesome',
      model: 'whoever doesn\'t agree is a jerk',
      total: 10
    }]
  })
};
