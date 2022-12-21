// libraries
import React from 'react';
import { Field, FormikValues } from 'formik';

type FieldProps = {
  array: Array<string>,
  group: string
};

const RadioGroup = (values: FieldProps & FormikValues) => {
  const renderRadioOption = (array: Array<string>, group: string) => array.map((text) => (
    <div key={text} className="radio-group-element">
      <Field className="radio-button" id={text} name={group} type="radio" value={text} />
      <label className="radio-text" htmlFor={text}>{text}</label>
    </div>
  ));

  const {
    array, group,
  } = values;

  return (
    <div className="radio-group">
      {renderRadioOption(array, group)}
    </div>
  );
};

export default RadioGroup;
