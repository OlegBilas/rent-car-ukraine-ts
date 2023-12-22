import React from 'react';
import { Model, Price, Title, TitleWrapper } from './CarTitle.styled';

export const CarTitle = ({ car }) => {
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
