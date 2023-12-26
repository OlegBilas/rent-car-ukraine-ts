import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCars, fetchMakes } from 'rdx/cars/operations';
import { Car } from 'types/types';

interface IState {
  items: Car[];
  favoriteIds: number[];
  makes: string[];
  isLoading: boolean;
  error: null | string;
}

const initialState: IState = {
  items: [],
  favoriteIds: [],
  makes: [],
  isLoading: false,
  error: null,
};

enum STATUS {
  FULFILLED = 'fulfilled',
  PENDING = 'pending',
  REJECTED = 'rejected',
}

const actionGenerators = [fetchCars, fetchMakes];

const getActionGeneratorsWithType = (status: STATUS) =>
  actionGenerators.map(generator => generator[status]);

const carsSlice = createSlice({
  name: 'cars',
  initialState,

  reducers: {
    setFavorite(state, action) {
      const carIndex = state.favoriteIds.findIndex(id => id === action.payload);
      if (carIndex >= 0) {
        state.favoriteIds.splice(carIndex, 1);
      } else {
        state.favoriteIds.push(action.payload);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, handleFetchCars)
      .addCase(fetchMakes.fulfilled, handleFetchMakes)
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.PENDING)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.FULFILLED)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...getActionGeneratorsWithType(STATUS.REJECTED)),
        handleRejected
      );
  },
});

function handleFetchCars(state: IState, action: PayloadAction<Car[]>) {
  state.items = action.payload;
}

function handleFetchMakes(state: IState, action: PayloadAction<string[]>) {
  state.makes = action.payload;
}

function handlePending(state: IState) {
  state.isLoading = true;
  state.error = null;
}

function handleFulfilled(state: IState) {
  state.isLoading = false;
  state.error = null;
}

function handleRejected(state: IState, action: PayloadAction<string>) {
  state.isLoading = false;
  state.error = action.payload;
}

export const { setFavorite } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
