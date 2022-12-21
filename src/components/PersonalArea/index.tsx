// libraries
import React from 'react';
import { Outlet } from 'react-router';
// components
import Card from 'components/shared/Card';
import Form from 'components/shared/Form';

const PersonalArea = () => (
  <Form burgerState="active-burger" className="registration-sponsors sponsors-white">
    <div className="container">
      <Outlet />
      <Card />
    </div>
  </Form>
);

export default PersonalArea;
