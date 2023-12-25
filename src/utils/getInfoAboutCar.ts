import { Car } from 'types/types';

export const getCarLocation = (address: string) => {
  const array = address.split(',');
  return {
    city: array[1],
    country: array[2],
  };
};

export const getFirstLine = ({ address, rentalCompany, accessories }: Car) => {
  const { city, country } = getCarLocation(address);

  const array = [city, country, rentalCompany];

  for (const item of accessories) {
    if (item.toLowerCase().includes('premium')) {
      array.push('Premium');
      break;
    }
  }

  return array;
};

export const getSecondLine = ({
  type,
  model,
  mileage,
  functionalities,
}: Car) => {
  return [type, model, mileage, functionalities[0]];
};

export const getFirstLineModal = ({ address, id, year, type }: Car) => {
  const { city, country } = getCarLocation(address);

  return [city, country, `id: ${id}`, `Year: ${year}`, `Type: ${type}`];
};

export const getSecondLineModal = ({ fuelConsumption, engineSize }: Car) => {
  return [`Fuel Consumption: ${fuelConsumption}`, `Engine Size: ${engineSize}`];
};

function MyCeil10(val: number) {
  return Math.ceil(val / 10) * 10;
}

export const getPriceRanges = (cars: Car[]) => {
  // Нормалізація цін
  const pricesArray = cars.map(({ rentalPrice }) =>
    Number.parseInt(rentalPrice.replaceAll(',', '').replaceAll('$', ''))
  );

  const priceMinMax = pricesArray.reduce(
    (reducer, rentalPrice) => {
      rentalPrice < reducer.min && (reducer.min = rentalPrice);
      rentalPrice > reducer.max && (reducer.max = rentalPrice);
      return reducer;
    },
    { min: Number.MAX_SAFE_INTEGER, max: 0 }
  );

  const minPrice = MyCeil10(priceMinMax.min);
  const maxPrice = MyCeil10(priceMinMax.max);

  const priceRanges = [];
  for (let price = minPrice; price <= maxPrice; price += 10) {
    priceRanges.push(price);
  }

  return priceRanges;
};
