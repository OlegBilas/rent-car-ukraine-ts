import styled from 'styled-components';
import { NavLink as NavLinkForStyle } from 'react-router-dom';
import { calcFontSize, calcWidth } from 'utils';
import { SCREENS } from 'components/GlobalStyle';

export const HeaderComp = styled.header`
  padding-left: ${({ theme }) => calcWidth('128px', theme.width)};
  padding-right: ${({ theme }) => calcWidth('128px', theme.width)};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: ${({ theme }) => calcFontSize('24px', theme.width)};
  padding-top: ${({ theme }) => calcWidth('32px', theme.width)};
  padding-bottom: ${({ theme }) => calcWidth('32px', theme.width)};
  margin-left: auto;
  background-color: #fff;
`;

export const NavLink = styled(NavLinkForStyle)`
  color: #3e85f3;
  font-size: ${({ theme }) => calcFontSize('18px', theme.width, 320)};
  font-weight: 600;
  line-height: 1.5;
  text-decoration-line: none;

  @media screen and (min-width: 425px) {
    font-size: ${({ theme }) => calcFontSize('19px', theme.width, 425)};
  }

  @media screen and (min-width: ${SCREENS.TABLET}) {
    font-size: ${({ theme }) => calcFontSize('20px', theme.width, 768)};
  }

  @media screen and (min-width: ${SCREENS.DESKTOP}) {
    font-size: ${({ theme }) => calcFontSize('24px', theme.width)};
  }

  &.active {
    color: rgba(11, 68, 205, 1);
    text-decoration-line: underline;
  }

  &:focus,
  &:hover {
    color: rgba(11, 68, 205, 1);
  }
`;
