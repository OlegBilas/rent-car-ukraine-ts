import { createGlobalStyle } from 'styled-components';
import { calcWidth } from 'utils';

export const SCREENS = {
  MOBILE: '320px',
  PRETABLET: '767px',
  TABLET: '768px',
  PREDESKTOP: '1439px',
  DESKTOP: '1440px',
};

export const GlobalStyle = createGlobalStyle`


#root{
  height: 100vh;
  display: flex;
  flex-direction: column;
}

main{
  flex: 1;
}


section {
  min-height: 100%;
  padding: ${({ theme } ) => calcWidth('50px', theme.width)} ${({ theme }) =>
  calcWidth('128px', theme.width)};
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
}
`;
