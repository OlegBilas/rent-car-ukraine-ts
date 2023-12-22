import { LineList } from './Line.styled';

export const Line = ({ carInfo }) => {
  return (
    <LineList>
      {carInfo.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </LineList>
  );
};
