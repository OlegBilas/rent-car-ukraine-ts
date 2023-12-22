import { useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/selectors';
import CommonPage from './CommonPage/CommonPage';

const CatalogPage = () => {
  const allCars = useSelector(selectCars);

  return <CommonPage allCars={allCars} title="Our adverts" />;
};

export default CatalogPage;
