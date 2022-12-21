// libraries
import React from 'react';
import { ErrorMessage, Field, FormikValues } from 'formik';

type FieldProps = {
  title: string,
  type: string,
  name: string,
};

const TextField = (values: FieldProps & FormikValues) => {
  const {
    title, type, name,
  } = values;

  return (
    <div className="input-box">
      <label className="registration-input-label" htmlFor={name}>
        {title}
      </label>
      <Field className="input-text" id={name} name={name} type={type} />
      <span className="input-error-span"><ErrorMessage name={name} /></span>
    </div>
  );
};

export default TextField;
