import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://650581acef808d3c66f01f43.mockapi.io/api';

export const fetchCars = createAsyncThunk(
  'cars/fetchAllCars',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMakes = createAsyncThunk(
  'cars/fetchAllMakes',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/makes');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
