import styled from 'styled-components';
import { calcWidth, calcFontSize } from 'utils';
import { SCREENS } from 'components/GlobalStyle';

export const Title = styled.h1`
  margin-bottom: 48px;
  font-weight: 600;
  font-size: ${({ theme }) => calcFontSize('104px', theme.width)};
  font-style: italic;
  text-align: center;

  line-height: 1;
  color: #3e85f3;

  border-radius: 44px;
  padding: ${({ theme }) => calcWidth('18px', theme.width)};

  background-color: rgb(247, 247, 251);

  @media screen and (max-width: 580px) {
    margin-top: 48px;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  margin-right: auto;
  transform: translateX(-150%);
  transition: transform 2500ms ease;

  &:nth-child(2) {
    margin-left: auto;
    transform: translateX(150%);
    transition: transform 2500ms cubic-bezier(0.4, 0, 0.2, 1) 2500ms;
  }
  &:nth-child(3) {
    transition: transform 2500ms cubic-bezier(0.4, 0, 0.2, 1) 5000ms;
    @media screen and (max-width: 580px) {
      margin-bottom: 48px;
    }
  }

  &.loaded {
    transform: translateX(0%);
  }

  @media screen and (min-width: ${SCREENS.TABLET}) {
    width: 80%;
  }
`;

export const TitleWrapper = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => calcWidth('24px', theme.width)};
`;
export const StyledNumber = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => calcFontSize('104px', theme.width)};

  color: #3e85f3;
`;
export const StyledLabel = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => calcFontSize('40px', theme.width)};
  line-height: 1.1;
  text-transform: uppercase;
  border-radius: 44px;
  padding: 6px 18px;

  background-color: rgb(247, 247, 251);
  color: #3e85f3;
`;

export const Info = styled.p`
  font-weight: 500;
  font-size: ${({ theme }) => calcFontSize('24px', theme.width)};
  line-height: 1.3;
  color: #ffffff;

  margin-bottom: ${({ theme }) => calcWidth('48px', theme.width)};
`;
