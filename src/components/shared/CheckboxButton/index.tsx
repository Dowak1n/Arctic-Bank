// libraries
import React from 'react';
import { ErrorMessage, Field, FormikValues } from 'formik';

type FieldProps = {
  title: string,
  type: string,
  name: string,
};

const CheckboxButton = (values: FieldProps & FormikValues) => {
  const {
    title, type, name,
  } = values;

  return (
    <div className="checkbox-container">
      <Field className="checkbox" id={name} name={name} type={type} />
      <label className="checkbox-text" htmlFor={name}>
        {title}
      </label>
      <span className="input-error-span"><ErrorMessage name={name} /></span>
    </div>
  );
};

export default CheckboxButton;
