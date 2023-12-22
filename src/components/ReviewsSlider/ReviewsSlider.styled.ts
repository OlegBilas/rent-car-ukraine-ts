import { SCREENS } from 'components/GlobalStyle';
import styled from 'styled-components';
import { calcFontSize, calcWidth } from 'utils';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${SCREENS.TABLET}) {
    width: 60%;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: ${({ theme }) => calcFontSize('40px', theme.width)};
  line-height: 1.1;
  color: #fff;
  text-align: center;
  text-transform: uppercase;

  margin-bottom: ${({ theme }) => calcWidth('50px', theme.width)};
`;

export const SliderCard = styled.div`
  height: 204px;
  margin-bottom: ${({ theme }) => calcWidth('18px', theme.width)};
  padding: ${({ theme }) => calcWidth('32px', theme.width)};

  border-radius: 8px;
  border: 1px solid #e7e5e5;

  @media screen and (min-width: ${SCREENS.TABLET}) {
    height: 284px;
  }
`;

export const ReviewContainer = styled.div`
  position: sticky;
  top: 0px;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;

  background-color: #ffffff;
`;

export const Image = styled.img`
  height: 80%;
  object-fit: cover;
  object-position: 50% 50%;
  background-repeat: no-repeat;
`;
export const CarInfo = styled.div`
  margin-left: 8px;
`;

export const Name = styled.h3`
  margin-top: 16px;

  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => calcFontSize('18px', theme.width)};
  line-height: 1;
  color: #343434;
  text-align: center;
`;
