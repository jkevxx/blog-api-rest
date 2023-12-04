import { Car } from '../interfaces/car.interface';
import ItemModel from '../models/item.model';

const getListItems = async (): Promise<Car[]> => {
  const response = await ItemModel.find({});
  return response;
};

const getOneItem = async (id: string) => {
  const response = await ItemModel.findById({ _id: id });
  return response;
};

const createItem = async (item: Car) => {
  const response = await ItemModel.create(item);
  return response;
};

const updateItem = async (id: string, item: Car) => {
  const response = await ItemModel.findByIdAndUpdate({ _id: id }, item, {
    new: true,
  });
  return response;
};

const destroyItem = async (id: string) => {
  const response = await ItemModel.findByIdAndDelete({ _id: id });
  return response;
};

export { createItem, destroyItem, getListItems, getOneItem, updateItem };
