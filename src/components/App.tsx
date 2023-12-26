import { Suspense, lazy, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectIsLoading } from 'rdx/cars/selectors';

import { Layout } from 'components/Layout/Layout';
import { fetchCars, fetchMakes } from 'rdx/cars/operations';
import { ThemeProvider } from 'styled-components';
import useWindowSize, { useAppSelector } from 'hooks';
import { GlobalStyle } from 'components/GlobalStyle';
import { useAppDispatch } from 'hooks';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));

export function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCars());
    dispatch(fetchMakes());
  }, [dispatch]);

  const sizes = useWindowSize();

  const isLoading = useAppSelector(selectIsLoading);

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
