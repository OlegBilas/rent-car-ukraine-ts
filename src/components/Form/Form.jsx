import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
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

import { useSelector } from 'react-redux';
import { selectCars, selectMakes } from 'redux/cars/selectors';
import { getPriceRanges } from 'utils';
import * as Yup from 'yup';

const initialValues = {
  make: '',
  rentalPrice: '',
  mileageFrom: '',
  mileageTo: '',
};

export const FormSearch = ({ setQuery }) => {
  const makes = useSelector(selectMakes);
  const cars = useSelector(selectCars);
  const [prices, setPrices] = useState([]);
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

  const getOptions = (items, setFieldValue, nameInput) =>
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
        rentalPrice: Yup.number().oneOf(prices, 'Invalid rental price of car'),
        mileageFrom: Yup.number().lessThan(
          Yup.ref('mileageTo') > 0
            ? Yup.ref('mileageTo')
            : Number.MAX_SAFE_INTEGER,
          'From should be < To'
        ),
        mileageTo: Yup.number().moreThan(
          Yup.ref('mileageFrom') > 0 ? Yup.ref('mileageFrom') : 0,
          'To should be > From'
        ),
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
                      val => setFieldValue('mileageFrom', val.floatValue) // floatValue - NumericFormat method to get number from string
                    }
                  />
                  <ErrorMessage name="mileageFrom" />
                </Div>
                <Div>
                  <TextTo>To </TextTo>
                  <FieldTo
                    value={values.mileageTo}
                    onValueChange={
                      val => setFieldValue('mileageTo', val.floatValue) // floatValue - NumericFormat method to get number from string
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
                onClick={values => {
                  setQuery(values);
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
