// libraries
import React from 'react';
// components
import RegistrationForm from 'components/Registration/Form';
import Card from 'components/shared/Card';
import Form from 'components/shared/Form';

const Registration = () => (
  <Form burgerState="disabled-burger" className="registration-sponsors sponsors-white">
    <div className="container">
      <RegistrationForm />
      <Card />
    </div>
  </Form>
);

export default Registration;
