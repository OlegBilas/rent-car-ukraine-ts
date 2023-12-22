import styled from 'styled-components';
import { Form as FormStyled } from 'formik';
import { Field } from 'formik';
import { MyNumberInput } from 'components/MyNumberInput/MyNumberInput';
import { SCREENS } from 'components/GlobalStyle';
import { calcWidth } from 'utils';

export const Form = styled(FormStyled)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  margin-left: auto;
  margin-right: auto;
  row-gap: 18px;
  column-gap: 8px;
  margin-bottom: ${({ theme }) => calcWidth('50px', theme.width)};

  @media screen and (min-width: ${SCREENS.DESKTOP}) {
    align-items: flex-end;
  }
`;

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28571;

  @media screen and (max-width: ${SCREENS.PRETABLET}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FieldStyled = styled(Field)`
  padding: 14px 18px;
  margin-top: 8px;
  box-sizing: border-box;
  border-radius: 14px;
  border: none;
  background: #f7f7fb;
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11111;
  outline: none;

  @media screen and (min-width: ${SCREENS.TABLET}) {
    font-size: 18px;
  }
`;

export const FieldMake = styled(FieldStyled)`
  width: ${({ theme }) => calcWidth('124px', theme.width, 320)};

  @media screen and (min-width: ${SCREENS.TABLET}) {
    width: ${({ theme }) => calcWidth('224px', theme.width, 768)};
  }

  @media screen and (min-width: ${SCREENS.DESKTOP}) {
    width: ${({ theme }) => calcWidth('224px', theme.width)};
  }
  &::placeholder {
    color: #121417;
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 52px;
  z-index: 1;

  width: 100%;
  height: 272px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 14px 18px;
  color: rgba(18, 20, 23, 0.2);
  background-color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  @media screen and (min-width: ${SCREENS.TABLET}) {
    font-size: 16px;
  }

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(18, 20, 23, 0.05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }

  & > li:hover,
  & > li:focus {
    color: #121417;
  }
`;

export const MyNumberInputStyled = styled(MyNumberInput)`
  margin-top: 8px;
  padding: 14px 14px;

  background: #f7f7fb;
  border: none;
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11111;
  outline: none;
  box-sizing: border-box;

  @media screen and (min-width: ${SCREENS.TABLET}) {
    font-size: 18px;
    padding: 14px 18px;
  }
`;

export const FieldPrice = styled(MyNumberInputStyled)`
  width: ${({ theme }) => calcWidth('115px', theme.width, 320)};

  @media screen and (min-width: ${SCREENS.TABLET}) {
    width: ${({ theme }) => calcWidth('125px', theme.width, 768)};
  }

  @media screen and (min-width: ${SCREENS.DESKTOP}) {
    width: ${({ theme }) => calcWidth('125px', theme.width)};
  }

  border-radius: 14px;
  font-family: Manrope;

  &::placeholder {
    color: #121417;
  }
`;

export const OpenDiv = styled.div`
  position: absolute;
  width: 34px;
  height: 20px;
  z-index: 20;

  top: 22px;
  right: 0px;
  background-color: #f7f7fb;
  border: none;

  pointer-events: none;

  &:focus,
  &:hover {
    background-color: #f7f7fb;
    border: none;
  }
`;

export const DivWrapper = styled.div`
  display: flex;
`;

export const Div = styled.div`
  position: relative;
`;

export const FieldFrom = styled(MyNumberInputStyled)`
  width: ${({ theme }) => calcWidth('115px', theme.width, 320)};
  border-top-left-radius: 12px;
  border-bottom-left-radius: 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  padding-left: ${({ theme }) => calcWidth('50px', theme.width, 320)};
  @media screen and (min-width: ${SCREENS.TABLET}) {
    width: 160px;
    padding-left: 70px;
  }
`;

export const TextFrom = styled.span`
  position: absolute;
  top: 22px;
  left: ${({ theme }) => calcWidth('12px', theme.width, 320)};

  background: #f7f7fb;
  border: none;
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11111;
  @media screen and (min-width: ${SCREENS.TABLET}) {
    left: 24px;
    font-size: 18px;
  }
`;

export const TextTo = styled(TextFrom)``;

export const FieldTo = styled(MyNumberInputStyled)`
  width: ${({ theme }) => calcWidth('115px', theme.width, 320)};
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  padding-left: ${({ theme }) => calcWidth('32px', theme.width, 320)};
  @media screen and (min-width: ${SCREENS.TABLET}) {
    width: 160px;
    padding-left: 52px;
  }
`;

export const SearchBtn = styled.button`
  align-self: flex-end;
  padding: 14px ${({ theme }) => calcWidth('34px', theme.width, 320)};
  border-radius: 12px;
  background-color: #3470ff;

  @media screen and (min-width: ${SCREENS.TABLET}) {
    padding: 14px 44px;
  }

  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42857;
  text-align: center;
`;

export const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 8px;

  @media screen and (max-width: ${SCREENS.PRETABLET}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 8px;

  @media screen and (max-width: ${SCREENS.PREDESKTOP}) {
    margin-left: auto;
    margin-right: auto;
  }
`;
