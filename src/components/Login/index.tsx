// libraries
import React from 'react';
// components
import LoginForm from 'components/Login/Form';
import Partners from 'components/shared/Partners';
import Footer from 'components/layuot/Footer';

const Login = () => (
  <>
    <LoginForm />
    <Partners className="registration-sponsors" />
    <Footer />
  </>
);

export default Login;
