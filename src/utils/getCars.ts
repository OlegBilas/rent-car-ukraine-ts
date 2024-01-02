import { IQuery } from 'types/types';
import { Car } from 'types/types';
import { ImageSizes, substitudeImages } from './substitudeImages';

type Result = {
  overallLength: number;
  carsFiltered: Car[];
};

export const getCars = (
  cars: Car[],
  query: IQuery,
  page: number,
  PER_PAGE = 8
): Result => {
  let result: Car[] = [];
  if (cars.length === 0)
    return {
      overallLength: cars.length,
      carsFiltered: result,
    };

  const { make, rentalPrice, mileageFrom, mileageTo } = query;
  result = [...cars];

  if (make) {
    result = result.filter(car => car.make === make);
  }

  if (rentalPrice) {
    result = result.filter(
      car =>
        Number.parseInt(
          car.rentalPrice.replaceAll('$', '').replaceAll(',', '')
        ) <= rentalPrice
    );
  }

  if (mileageFrom) {
    result = result.filter(car => car.mileage >= mileageFrom);
  }

  if (mileageTo) {
    result = result.filter(car => car.mileage <= mileageTo);
  }

  const index = page * PER_PAGE;

  const resultByPage = substitudeImages(
    result.slice(0, index),
    ImageSizes.MEDIUM
  );

  return {
    overallLength: result.length,
    carsFiltered: resultByPage,
  };
};
