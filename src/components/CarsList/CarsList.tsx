import {
  List,
  Item,
  Image,
  LearnMoreBtn,
  Like,
  LikeBtn,
} from './CarsList.styled';
import { useState } from 'react';
import { calcWidth, getFirstLine, getSecondLine } from 'utils';
import { CarTitle } from 'components/CarTitle/CarTitle';
import { Line } from 'components/Line/Line';
import { setFavorite } from 'rdx/cars/carsSlice';
import { useTheme } from 'styled-components';
import { Car } from 'types/types';
import { useAppDispatch } from 'hooks';
import { Modal } from 'components/Modal/Modal';

interface IProps {
  cars: Car[];
}

export const CarsList = ({ cars }: IProps) => {
  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [car, setCar] = useState<Car>(cars[0]);

  const toggleModal = (car: Car) => {
    setShowModal(prevState => !prevState);
    setCar(car);
  };

  const dispatch = useAppDispatch();
  const handleClick = (id: number) => {
    dispatch(setFavorite(id));
  };

  return (
    <List>
      {cars.map(car => (
        <Item key={car.id}>
          <LikeBtn
            type="button"
            className={car.favorite ? 'liked' : 'non-liked'}
            onClick={() => handleClick(car.id)}
          >
            <Like
              width={18}
              height={18}
              className={car.favorite ? 'liked' : 'non-liked'}
            />
          </LikeBtn>
          <Image
            src={car.img}
            alt={`${car.make} ${car.model}, ${car.year}`}
            width={calcWidth(274, theme.width)}
            height="268"
          />
          <CarTitle car={car} />
          <Line carInfo={getFirstLine(car)} />
          <Line carInfo={getSecondLine(car)} />
          <LearnMoreBtn
            className="accent-button"
            type="button"
            onClick={() => toggleModal(car)}
          >
            Learn more
          </LearnMoreBtn>
        </Item>
      ))}
      {showModal && <Modal car={car} toggleModal={toggleModal} />}
    </List>
  );
};
