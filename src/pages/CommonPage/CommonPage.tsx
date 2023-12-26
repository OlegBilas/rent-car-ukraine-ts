import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { CarsList } from 'components/CarsList/CarsList';
import { FormSearch } from 'components/Form/Form';

import { getCars } from 'utils';
import { LoadMoreBtn } from './CommonPage.styled';
import { Helmet } from 'react-helmet-async';
import { Car, IQuery } from 'types/types';

interface IProps {
  allCars: Car[];
  title: string;
}

const CommonPage = ({ allCars, title }: IProps) => {
  const [query, setQuery] = useState<IQuery>({
    make: '',
    rentalPrice: '',
    mileageFrom: 0,
    mileageTo: 0,
  });
  const [page, setPage] = useState<number>(1);
  const [cars, setCars] = useState<Car[]>([]);

  const ref = useRef<boolean>();

  // reset all filters before new request
  useEffect(() => {
    setPage(1);
    setCars([]);
    ref.current = false;
  }, [query]);

  useEffect(() => {
    const carsObject = getCars(allCars, query, page);
    setCars(carsObject.carsFiltered);

    if (carsObject.overallLength === 0 && page === 1) {
      // no data
      ref.current = true;
    }
  }, [allCars, page, query]);

  const handleClickLoadMore = () => {
    const carsObject = getCars(allCars, query, page);
    setPage(prevState => prevState + 1);
    if (carsObject.overallLength === 0 && page === 1) {
      // no data
      toast.error("We didn't find any info on your request!");
      ref.current = true;
      return;
    }

    if (carsObject.overallLength === carsObject.carsFiltered.length) {
      // end of collection
      toast.warn("It's the end of the collection!");
      ref.current = true;
    }
    setCars(carsObject.carsFiltered);
  };

  return (
    <section>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <FormSearch setQuery={setQuery} />
      <CarsList cars={cars} />
      {!ref.current && (
        <LoadMoreBtn type="button" onClick={handleClickLoadMore}>
          Load more
        </LoadMoreBtn>
      )}
    </section>
  );
};

export default CommonPage;
