// libraries
import React from 'react';
import {
  Form, Formik, FormikProps,
} from 'formik';
// api
import createUser, { signUp } from 'api';
// components
import SignupSchema from 'components/Registration/Form/config';
import TextField from 'components/shared/TextField';
import RadioGroup from 'components/shared/RadioGroup';
import DateFields from 'components/shared/DateFields';
import CheckboxButton from 'components/shared/CheckboxButton';
import MaskedInput from 'components/shared/MaskedInput';
import Information from 'components/layuot/Information';
import { useNavigate } from 'react-router-dom';

type FormikValues = {
  firstName: string,
  lastName: string,
  passportNumber: string,
  phoneNumber: string,
  day: string,
  month: string,
  year: string,
  sex: string,
  conditionRules: boolean,
  conditionSMS: boolean,
  age: number,
  email:string,
  password:string,
  repeatPassword:string,
};

const initialValues = {
  firstName: '',
  lastName: '',
  passportNumber: '',
  phoneNumber: '',
  day: '1',
  month: '1',
  year: '2000',
  sex: 'male',
  conditionRules: false,
  conditionSMS: false,
  age: 0,
  email: '',
  password: '',
  repeatPassword: '',
};

const sex = ['male', 'female'];
const minAge = 18;
const maxAge = 90;

const RegistrationForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values:FormikValues) => {
    try {
      await createUser(values);
      await signUp(values);
      await navigate('/personalArea/calculator');
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >

      {(props: FormikProps<FormikValues>) => (
        <Form className="content">
          <div className="wrapper">
            <div className="main">
              <h2>
                Get to know personal data
              </h2>
              <TextField name="firstName" rest={props} title="First name *" type="text" />
              <TextField name="lastName" rest={props} title="Last name *" type="text" />
              <TextField name="passportNumber" rest={props} title="Passport number *" type="text" />
              <TextField name="email" rest={props} title="Email *" type="text" />
              <TextField name="password" rest={props} title="Password *" type="password" />
              <TextField name="repeatPassword" rest={props} title="Repeat password *" type="password" />
              <RadioGroup
                array={sex}
                group="sex"
              />

              <DateFields
                maxAgeValue={maxAge}
                minAgeValue={minAge}
                title="Birthday *"
                valueMonth={props.values.month}
                valueYear={props.values.year}
              />

              <MaskedInput
                mask="+375(99)999-99-99"
                name="phoneNumber"
                title="Phone Number *"
                type="text"
              />

              <button className="button next" id="next" type="submit">Next step</button>
            </div>

            <CheckboxButton
              name="conditionRules"
              title=" I have read and accept the privacy policy"
              type="checkbox"
            />

            <CheckboxButton
              name="conditionSMS"
              title=" I expressly consent to receive communications through
              WhatsApp in order to streamline both the management of pre-contracted and contracted services.
              More information about WhatsApp privacy here"
              type="checkbox"
            />
            <Information />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
