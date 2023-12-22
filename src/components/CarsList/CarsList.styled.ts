import styled from 'styled-components';
import { ReactComponent as LikeStyled } from 'images/CarsList/like.svg';
import { SCREENS } from 'components/GlobalStyle';
import { calcWidth } from 'utils';

export const List = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(
    1,
    ${({ theme }) => calcWidth('236px', theme.width, 320)}
  );
  grid-template-rows: auto;
  grid-row-gap: ${({ theme }) => calcWidth('50px', theme.width)};
  grid-column-gap: ${({ theme }) => calcWidth('28px', theme.width)};

  margin-bottom: ${({ theme }) => calcWidth('100px', theme.width)};

  @media screen and (min-width: ${SCREENS.TABLET}) {
    grid-template-columns: repeat(
      2,
      ${({ theme }) => calcWidth('302px', theme.width, 768)}
    );
  }
  @media screen and (min-width: ${SCREENS.DESKTOP}) {
    grid-template-columns: repeat(
      4,
      ${({ theme }) => calcWidth('274px', theme.width)}
    );
  }
`;

export const Item = styled.li`
  position: relative;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5px;
`;

export const LikeBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  background-color: transparent;
  border: none;

  &:focus,
  &:hover {
    background-color: transparent;
  }
  &.liked {
    color: rgba(52, 112, 255, 1);
  }
  &.non-liked {
    color: transparent;
  }
`;

export const Like = styled(LikeStyled)`
  fill: currentColor;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.liked {
    stroke: currentColor;
  }
  &.non-liked {
    stroke: rgba(255, 255, 255, 0.8);
  }
  &:focus,
  &:hover {
    fill: rgba(52, 112, 255, 1);
    stroke: currentColor;
  }
`;

export const Image = styled.img`
  margin-bottom: 14px;
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  object-fit: cover;
  object-position: 50% 50%;
  overflow: hidden;
`;

export const LearnMoreBtn = styled.button`
  width: 100%;
  padding: 12px;
  text-align: center;
  margin-top: ${({ theme }) => calcWidth('28px', theme.width)};
`;
