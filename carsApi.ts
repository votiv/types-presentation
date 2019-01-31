import { IMyObject } from './interfaces';

interface ICarsApi {
  getCars: () => Promise<IMyObject>;
}

export const carsApi: ICarsApi = {
  getCars: () => new Promise((resolve: (value: IMyObject) => void) => resolve({
    order_id: 'uuid for order',
    order_description: 'order description',
    cars: [{
      car_id: 'yolo string',
      image: 'intellisense is awesome',
      model: 'whoever doesn\'t agree is a jerk',
      total: 10
    }]
  }))
};
