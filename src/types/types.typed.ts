export interface IQuery {
  make?: string;
  rentalPrice?: string;
  mileageFrom?: number;
  mileageTo?: number;
}

export interface Car {
  id: number;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
  favorite: boolean;
}
