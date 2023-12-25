import { selectCars } from 'redux/cars/selectors';
import CommonPage from './CommonPage/CommonPage';
import { useAppSelector } from 'hooks';

const CatalogPage = () => {
  const allCars = useAppSelector(selectCars);

  return <CommonPage allCars={allCars} title="Our adverts" />;
};

export default CatalogPage;
