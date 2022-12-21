// libraries
import React from 'react';
import InputMask from 'react-input-mask';
import { ErrorMessage, Field, FormikValues } from 'formik';

type FieldProps = {
  title: string
  type: string,
  name: string,
  mask: string
};

const MaskedInput = (values: FieldProps & FormikValues) => {
  const {
    title, type, name, mask,
  } = values;

  return (
    <div className="input-box">
      <label className="registration-input-label" htmlFor={name}>
        {title}
      </label>
      <Field
        id={name}
        name={name}
        render={({ field }: any) => (
          <InputMask
            {...field}
            className="input-text"
            mask={mask}
            placeholder="Enter your phone number"
            type={type}
          />
        )}
      />
      <span className="input-error-span"><ErrorMessage name="phoneNumber" /></span>
    </div>
  );
};

export default MaskedInput;
