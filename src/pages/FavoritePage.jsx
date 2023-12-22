import { useSelector } from 'react-redux';
import { selectFavoriteCars } from 'redux/cars/selectors';
import CommonPage from './CommonPage/CommonPage';

const FavoritePage = () => {
  const allCars = useSelector(selectFavoriteCars);

  return <CommonPage allCars={allCars} title="Your favorites" />;
};

export default FavoritePage;
