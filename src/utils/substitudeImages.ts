import { Car } from 'types/types';
import { calcWidthForImage } from './forCSS';

// export enum ImageSizes {
//   SMALL,
//   MEDIUM,
//   BIG,
// }

export const substitudeImages = (
  cars: Car[],
  imageSize: number,
  widthWindow: number
): Car[] => {
  const imageWidth = calcWidthForImage(imageSize, widthWindow);

  return cars.map((car: Car) => {
    const newImage = car.img.replace(
      'upload/',
      `upload/c_fill,g_auto,w_${imageWidth}/`
    );
    return { ...car, img: newImage };
  });
};
