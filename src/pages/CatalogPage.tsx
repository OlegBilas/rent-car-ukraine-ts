import { selectCars } from 'rdx/cars/selectors';
import CommonPage from 'pages/CommonPage/CommonPage';
import { useAppSelector } from 'hooks';

const CatalogPage = () => {
  const allCars = useAppSelector(selectCars);

  return <CommonPage allCars={allCars} title="Our adverts" />;
};

export default CatalogPage;
