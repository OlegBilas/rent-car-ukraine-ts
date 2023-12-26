import { useEffect, useState } from 'react';
import { Formik, ErrorMessage, FormikErrors } from 'formik';
import {
  Form,
  SearchBtn,
  FieldMake,
  FieldPrice,
  FieldFrom,
  FieldTo,
  Label,
  Div,
  TextTo,
  TextFrom,
  OpenDiv,
  DivWrapper,
  List,
  FieldWrapper,
  ButtonWrapper,
} from './Form.styled';
import { ReactComponent as OpenedSvg } from 'images/Form/opened.svg';
import { ReactComponent as ClosedSvg } from 'images/Form/closed.svg';

import { selectCars, selectMakes } from 'rdx/cars/selectors';
import { getPriceRanges } from 'utils';
import * as Yup from 'yup';
import { IQuery } from 'types/types';
import { useAppSelector } from 'hooks';
import { NumberFormatValues } from 'react-number-format';

const initialValues: IQuery = {
  make: '',
  rentalPrice: '',
  mileageFrom: 0,
  mileageTo: 0,
};

interface IProps {
  setQuery: React.Dispatch<React.SetStateAction<IQuery>>;
}

export const FormSearch = ({ setQuery }: IProps) => {
  const makes = useAppSelector(selectMakes);
  const cars = useAppSelector(selectCars);
  const [prices, setPrices] = useState<number[]>([]);
  const [openedMake, setOpenedMake] = useState(false);
  const [openedPrice, setOpenedPrice] = useState(false);

  useEffect(() => {
    setPrices(getPriceRanges(cars)); // array of numbers
  }, [cars]);

  const toggleMakeMenu = () => {
    setOpenedMake(prevState => !prevState);
  };

  const togglePriceMenu = () => {
    setOpenedPrice(prevState => !prevState);
  };

  type SetFieldValue = (
    field: string,
    value: string | number,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<IQuery>>;

  const getOptions = (
    items: string[] | number[],
    setFieldValue: SetFieldValue,
    nameInput: string
  ) =>
    items.map(item => (
      <li
        key={item}
        onClick={() => {
          setFieldValue(nameInput, item);
        }}
      >
        {item}
      </li>
    ));

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        make: Yup.string().oneOf(makes, 'Invalid make of car'),
        rentalPrice: Yup.number()
          .transform(value => (isNaN(value) ? undefined : value))
          .oneOf(prices, 'Invalid rental price of car'),
        mileageFrom: Yup.number()
          // .transform(value => (isNaN(value) ? 0 : value))
          .lessThan(Yup.ref('mileageTo'), 'From should be < To'),
        mileageTo: Yup.number()
          .transform(value => (isNaN(value) ? Number.MAX_SAFE_INTEGER : value))
          .moreThan(Yup.ref('mileageFrom'), 'To should be > From'),
      })}
      onSubmit={values => {
        setQuery(values);
        setOpenedMake(false);
        setOpenedPrice(false);
      }}
    >
      {props => {
        const { values, setFieldValue } = props;
        return (
          <Form>
            <FieldWrapper>
              <Label>
                Car brand
                <Div>
                  <FieldMake
                    name="make"
                    type="text"
                    onClick={toggleMakeMenu}
                    placeholder="Enter the text"
                    autoComplete="off"
                  />
                  {openedMake && (
                    <List> {getOptions(makes, setFieldValue, 'make')}</List>
                  )}
                  <OpenDiv>
                    {openedMake ? (
                      <OpenedSvg width={20} height={20} />
                    ) : (
                      <ClosedSvg width={20} height={20} />
                    )}
                  </OpenDiv>
                  <ErrorMessage name="make" />
                </Div>
              </Label>

              <Label>
                Price/1 hour
                <Div>
                  <FieldPrice
                    onClick={togglePriceMenu}
                    value={values.rentalPrice}
                    onValueChange={
                      val => setFieldValue('rentalPrice', val.floatValue) // floatValue - NumericFormat method to get number
                    }
                    prefix="To "
                    suffix="$"
                    placeholder="To $"
                    autoComplete="off"
                  />
                  {openedPrice && (
                    <List>
                      {getOptions(prices, setFieldValue, 'rentalPrice')}
                    </List>
                  )}

                  <OpenDiv>
                    {openedPrice ? (
                      <OpenedSvg width={20} height={20} />
                    ) : (
                      <ClosedSvg width={20} height={20} />
                    )}
                  </OpenDiv>

                  <ErrorMessage name="rentalPrice" />
                </Div>
              </Label>
            </FieldWrapper>
            <Label>
              Сar mileage/km
              <DivWrapper>
                <Div>
                  <TextFrom>From </TextFrom>
                  <FieldFrom
                    value={values.mileageFrom}
                    onValueChange={
                      (val: NumberFormatValues) =>
                        setFieldValue('mileageFrom', val.floatValue) // floatValue - NumericFormat method to get number from string
                    }
                  />
                  <ErrorMessage name="mileageFrom" />
                </Div>
                <Div>
                  <TextTo>To </TextTo>
                  <FieldTo
                    value={values.mileageTo}
                    onValueChange={
                      (val: NumberFormatValues) =>
                        setFieldValue('mileageTo', val.floatValue) // floatValue - NumericFormat method to get number from string
                    }
                  />

                  <ErrorMessage name="mileageTo" />
                </Div>
              </DivWrapper>
            </Label>
            <ButtonWrapper>
              <SearchBtn className="accent-button" type="submit">
                Search
              </SearchBtn>
              <SearchBtn
                className="accent-button"
                type="reset"
                onClick={() => {
                  setQuery(initialValues);
                  setOpenedMake(false);
                  setOpenedPrice(false);
                }}
              >
                Reset
              </SearchBtn>
            </ButtonWrapper>
          </Form>
        );
      }}
    </Formik>
  );
};
