import { carsApi } from './carsApi';

export interface IMyObject {
  order_id: string;
  order_description: string;
  cars: IMyObjectData[];
}

interface IMyObjectData {
  car_id: string;
  image: string;
  total: number;
  model: string;
}

const getCars: () => Promise<IMyObject> = async () => await carsApi.getCars();

console.log('get cars', getCars());
