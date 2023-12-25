import styled from 'styled-components';
import { ReactComponent as github } from 'images/Footer/github.svg';
import { calcFontSize, calcWidth } from 'utils';
import { SCREENS } from 'components/GlobalStyle';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => calcWidth('32px', theme.width)};
  padding-bottom: ${({ theme }) => calcWidth('32px', theme.width)};

  background-color: #3470ff;
`;

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => calcFontSize('24px', theme.width)};
  color: #fff;
`;

export const GithubIcon = styled(github)`
  width: 16px;
  height: 16px;
  fill: currentColor;
  stroke: currentColor;
  margin-right: 8px;
  @media screen and (min-width: ${SCREENS.TABLET}) {
    width: 32px;
    height: 32px;
  }
`;
