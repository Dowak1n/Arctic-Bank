// libraries
import React from 'react';
// components
import Header from 'components/layuot/Header';
import Partners from 'components/shared/Partners';
import Cookies from 'components/shared/Cookies';
import Footer from 'components/layuot/Footer';

type FieldProps = {
  className: string,
  children: React.ReactNode,
  burgerState: string
};

const Form = (values: FieldProps) => {
  const {
    className, children, burgerState,
  } = values;

  return (
    <>
      <Header burgerState={burgerState} />
      <main className="main">
        <div className="background">
          {children}
          <Partners className={className} />
        </div>
        <Cookies />
      </main>
      <Footer />
    </>
  );
};

export default Form;
