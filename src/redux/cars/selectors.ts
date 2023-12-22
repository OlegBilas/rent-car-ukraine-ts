import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

export const selectIsLoading = (state: RootState) => state.cars.isLoading;
export const selectError = (state: RootState) => state.cars.error;
export const selectMakes = (state: RootState) => state.cars.makes;
const selectAllCars = (state: RootState) => state.cars.items;
const selectFavoriteIds = (state: RootState) => state.cars.favoriteIds;

export const selectCars = createSelector(
  [selectFavoriteIds, selectAllCars],
  (favoriteIds, items) => {
    const result = items.map(car => ({ ...car, favorite: false }));

    favoriteIds.forEach(id => {
      const carFinded = result.find(car => car.id === id);
      carFinded && (carFinded.favorite = true);
    });

    return result;
  }
);

export const selectFavoriteCars = createSelector([selectCars], items =>
  items.filter(car => car.favorite === true)
);
