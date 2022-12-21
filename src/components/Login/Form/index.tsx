// libraries
import React from 'react';
import {
  Form, Formik, FormikProps,
} from 'formik';
import { Link, useNavigate } from 'react-router-dom';
// api
import { signIn } from 'api';
// components
import TextField from 'components/shared/TextField';
import LogInSchema from 'components/Login/Form/config';

type FormikValues = {
  email: string,
  password: string,
};

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values: FormikValues) => {
    try {
      await signIn(values);
      navigate('/personalArea/calculator');
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LogInSchema}
    >

      {(props: FormikProps<FormikValues>) => (
        <Form className="login-container">
          <div className="login-content">
            <h2>Join account</h2>

            <TextField
              name="email"
              rest={props}
              title="Email *"
              type="text"
            />
            <TextField
              name="password"
              rest={props}
              title="Password *"
              type="password"
            />

            <button className="button next" id="next" type="submit">Next step</button>
            <Link className="login-text-link" to="/registration">Go to registration</Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
