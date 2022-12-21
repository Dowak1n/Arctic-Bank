// libraries
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// assets
import { ReactComponent as Burger } from 'assets/menuBurger.svg';
import { ReactComponent as Close } from 'assets/close.svg';

const BurgerMenu = ({ burgerMenu }: { burgerMenu:string }) => {
  const [isShowBurgerMenu, setIsShowBurgerMenu] = useState<boolean>(false);

  const OpenBurgerMenu = () => {
    if (isShowBurgerMenu === false) {
      setIsShowBurgerMenu(true);

      return;
    }
    setIsShowBurgerMenu(false);
  };

  return (
    <div className={burgerMenu}>
      <div className="header-navigation">
        <NavLink className="header-navigation-element" to="/personalArea/calculator">Calculator</NavLink>
        <NavLink className="header-navigation-element" to="/personalArea/creditDescription">Credit description</NavLink>
        <NavLink className="header-navigation-element" to="/personalArea/productList">Loans List</NavLink>
        <NavLink className="header-navigation-element" to="/personalArea/userDetails">User Info</NavLink>
      </div>
      <div className="header-navigation-burger" onClick={OpenBurgerMenu}>
        <Burger />
      </div>
      <div className={isShowBurgerMenu === false ? 'box' : ''}>
        <div className="mymodal">
          <div className="overlay">
            <div className="content">
              <i aria-hidden="true" className="fa fa-times close" />
              <div className="burger-navigation-mobile">
                <div className="burger-navigation-close-button" onClick={OpenBurgerMenu}><Close /></div>
                <NavLink className="burger-navigation-mobile-elements" to="/personalArea/calculator">Calculator</NavLink>
                <NavLink className="burger-navigation-mobile-elements" to="/personalArea/creditDescription">Credit description</NavLink>
                <NavLink className="burger-navigation-mobile-elements" to="/personalArea/productList">Loans List</NavLink>
                <NavLink className="burger-navigation-mobile-elements" to="/personalArea/userDetails">User Info</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
