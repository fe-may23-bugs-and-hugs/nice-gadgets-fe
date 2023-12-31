import { Description } from './PhoneDescr';

export type Phone = {
  _id: string;
  name: string;
  namespaceId: string;
  category: string;
  capacity: string;
  capacityAvailable: string[];
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
  year: number;
};

export interface PhoneWithQuantity extends Phone {
  quantity: number;
}
