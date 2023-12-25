import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { Car } from 'types/types';

export const selectIsLoading = (state: RootState) => state.cars.isLoading;
export const selectError = (state: RootState) => state.cars.error;
export const selectMakes = (state: RootState) => state.cars.makes;
const selectAllCars = (state: RootState) => state.cars.items;
const selectFavoriteIds = (state: RootState) => state.cars.favoriteIds;

export const selectCars = createSelector(
  [selectFavoriteIds, selectAllCars],
  (favoriteIds, items) => {
    const result = items.map((car: Car) => ({ ...car, favorite: false }));

    favoriteIds.forEach((id: number) => {
      const carFinded = result.find((car: Car) => car.id === id);
      carFinded && (carFinded.favorite = true);
    });

    return result;
  }
);

export const selectFavoriteCars = createSelector([selectCars], items =>
  items.filter((car: Car) => car.favorite === true)
);
