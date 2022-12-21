// libraries
import React, { useEffect, useState } from 'react';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
// api
import { auth } from 'api/config';
import { getUser } from 'api';
// components
import Registration from 'components/Registration';
import Login from 'components/Login';
import CalculatorForm from 'components/PersonalArea/calculator/Form';
import User from 'components/PersonalArea/User';
import LoanPayment from 'components/PersonalArea/LoanPayment';
import PersonalArea from 'components/PersonalArea';
import ProductList from 'components/PersonalArea/ProductList';
import CreditDescription from 'components/PersonalArea/CreditDescription';
// types
import { PersonalData } from 'types/types';

const App = () => {
  const [userEmail, setUserEmail] = useState<string>();
  const [userData, setUserData] = useState<PersonalData>();
  const [isAuthUser, setIsAuthUser] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDataServer = (getUser(user.email));
        const result = await userDataServer;

        setUserData(result as PersonalData);
        setUserEmail(user.email);
        setIsAuthUser(true);

        return;
      }
      setIsAuthUser(false);
    });
  }, [isAuthUser]);

  const publicRoutes = (
    <Routes>
      <Route element={<Navigate replace to="/login" />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Registration />} path="/registration" />
    </Routes>
  );

  const privateRoutes = (
    <Routes>
      <Route element={<Navigate replace to="/personalArea" />} path="/" />
      <Route element={<PersonalArea />} path="/personalArea">
        <Route element={<ProductList userEmail={userEmail} />} path="productList" />
        <Route element={<User userInfoData={userData} />} path="userDetails" />
        <Route element={<CalculatorForm userEmail={userEmail} />} path="/personalArea/calculator" />
        <Route element={<CreditDescription userEmail={userEmail} />} path="creditDescription" />
        <Route element={<LoanPayment userEmail={userEmail} />} path="loanPayment" />
      </Route>
    </Routes>
  );

  return (
    isAuthUser ? privateRoutes : publicRoutes
  );
};

export default App;
