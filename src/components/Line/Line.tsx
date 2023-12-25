import { LineList } from './Line.styled';

interface IProps {
  carInfo: (string | number)[];
}

export const Line = ({ carInfo }: IProps) => {
  return (
    <LineList>
      {carInfo.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </LineList>
  );
};
