import { Car } from 'types/types.typed';
import { Model, Price, Title, TitleWrapper } from './CarTitle.styled';

interface IProps {
  car: Car;
}

export const CarTitle = ({ car }: IProps) => {
  return (
    <TitleWrapper>
      <Title>
        <span>{car.make} </span>
        <Model>{car.model}, </Model>
        <span>{car.year}</span>
      </Title>
      <Price>{car.rentalPrice}</Price>
    </TitleWrapper>
  );
};
