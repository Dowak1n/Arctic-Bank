// libraries
import React from 'react';
// assets
import BurgerMenu from 'components/shared/BurgerMenu';

type FieldProps = {
  burgerState: string
};

const Header = (values:FieldProps) => {
  const { burgerState } = values;

  return (
    <header className="header">
      <div className="header-div">
        <h1 className="header-logo">Arctic Bank</h1>
        <BurgerMenu burgerMenu={burgerState} />
        <button className="header-div-button">Already a customer?</button>
      </div>
    </header>
  );
};

export default Header;
