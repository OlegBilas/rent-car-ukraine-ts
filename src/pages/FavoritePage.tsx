import { selectFavoriteCars } from 'rdx/cars/selectors';
import CommonPage from 'pages/CommonPage/CommonPage';
import { useAppSelector } from 'hooks';

const FavoritePage = () => {
  const allCars = useAppSelector(selectFavoriteCars);

  return <CommonPage allCars={allCars} title="Your favorites" />;
};

export default FavoritePage;
