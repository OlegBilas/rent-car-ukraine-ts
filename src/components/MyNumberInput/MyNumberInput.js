// import { useState } from 'react';
import { NumericFormat } from 'react-number-format';

export const MyNumberInput = props => {
  // const [value, setValue] = useState('');                            // only manually for controlled form

  return (
    <NumericFormat
      valueIsNumericString={true}
      thousandSeparator={true}
      decimalScale={0}
      allowNegative={false}
      prefix={props.prefix}
      suffix={props.suffix}
      // value={value}                                                // only manually for controlled form
      // onValueChange={vals => setValue(vals.formattedValue)}          // only manually for controlled form,
      {...props}
    />
  );
};

// vals.floatValue - NumericFormat method to get number
// vals.formattedValue - NumericFormat method to get string
