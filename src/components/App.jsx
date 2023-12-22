import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectIsLoading } from 'redux/cars/selectors';

import { Layout } from './Layout/Layout';
import { fetchCars, fetchMakes } from 'redux/cars/operations';
import { ThemeProvider } from 'styled-components';
import useWindowSize from 'hooks';
import { GlobalStyle } from './GlobalStyle';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
    dispatch(fetchMakes());
  }, [dispatch]);

  const sizes = useWindowSize();

  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Suspense fallback={<Loader />}>
        <ThemeProvider theme={sizes}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="catalog" element={<CatalogPage />} />
              <Route path="favorites" element={<FavoritePage />} />
              <Route path="*" element={<Navigate to={'/'} />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Suspense>
      <ToastContainer />
    </>
  );
}
