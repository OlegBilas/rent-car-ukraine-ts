import { Car } from 'types/types';

export enum ImageSizes {
  SMALL,
  MEDIUM,
  BIG,
}

export const substitudeImages = (cars: Car[], imageSize: ImageSizes): Car[] => {
  let newCars: Car[] = [];
  if (imageSize === ImageSizes.SMALL) {
    newCars = cars.map((car: Car) => {
      const newImage = car.img.replace('upload/', 'upload/t_Thumbnail/');
      return { ...car, img: newImage };
    });
  }
  if (imageSize === ImageSizes.MEDIUM) {
    newCars = cars.map((car: Car) => {
      const newImage = car.img.replace('upload/', 'upload/t_Banner 16:9/');
      return { ...car, img: newImage };
    });
  }
  return newCars;
};
