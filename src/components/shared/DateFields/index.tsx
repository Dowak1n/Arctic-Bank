// libraries
import React from 'react';
import { ErrorMessage, Field, FormikValues } from 'formik';
// helpers
import { getDayInMonth, getYearOption } from 'helpers/dates';
// constants
import { MONTH_LIST } from 'constants/dates';

type FieldProps = {
  title: string,
  valueYear: string,
  valueMonth: string,
  minAgeValue: number,
  maxAgeValue: number
};

const DateFields = (values: FieldProps & FormikValues) => {
  const renderFieldOption = (array: Array<any>) => array.map((text) => <option key={text}>{text}</option>);

  const {
    title, valueYear, valueMonth, minAgeValue, maxAgeValue,
  } = values;

  return (
    <div>
      <label className="registration-input-label" htmlFor="day">
        {title}
      </label>
      <div className="date-birth">
        <Field as="select" className="date-birth-input day" id="day" name="day">
          {renderFieldOption(getDayInMonth(valueYear, valueMonth))}
        </Field>
        <Field as="select" className="date-birth-input month" id="month" name="month">
          {renderFieldOption(MONTH_LIST)}
        </Field>
        <Field as="select" className="date-birth-input year" id="year" name="year">
          {renderFieldOption(getYearOption(minAgeValue, maxAgeValue))}
        </Field>
      </div>
      <div className="date-birth">
        <span className="input-error-span"><ErrorMessage name="age" /></span>
      </div>
    </div>
  );
};

export default DateFields;
