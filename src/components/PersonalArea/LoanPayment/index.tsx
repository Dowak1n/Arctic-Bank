// libraries
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// types
import { Amount, Email } from 'types/types';
// assets
import { ReactComponent as Bizum } from 'assets/bizum.svg';
import { ReactComponent as IBAN } from 'assets/IBAN.svg';
import { ReactComponent as Viacash } from 'assets/viacash_fulllogo.svg';

const shiftOne = 1;

const bankIcons = [
  <Bizum key="Bizum" />,
  <IBAN key="IBAN" />,
  <Viacash key="Viacash" />,
];

const titleCards = [
  'Pay with Bizum',
  'Pay with Iban',
  'Pay with Viacach',
];

const LoanPayment = ({ userEmail }: Email) => {
  const [userAmounts, setUserAmounts] = useState<Array<Amount>>();
  const navigate = useNavigate();

  useEffect(() => {
    setUserAmounts(JSON.parse(localStorage.getItem(userEmail)));
  }, [userEmail]);

  const loanCredit = () => {
    userAmounts[userAmounts.length - shiftOne].condition = 'Paid';
    localStorage.setItem(userEmail, JSON.stringify(userAmounts));
    navigate('/personalArea/productList');
  };

  const renderPaymentCards = (icons: Array<React.ReactElement>) => icons.map((text, id) => (
    <div key={text.key} className="payment-credit-form">
      <div className="payment-credit-form-heading">
        <span>
          {`${id + shiftOne}. ${titleCards[id]}`}
        </span>
        {text}
      </div>
      <button className="button payment" onClick={loanCredit}>
        {`${titleCards[id]} € ${userAmounts ? userAmounts[userAmounts.length - shiftOne].amount : '...'}`}
      </button>
    </div>
  ));

  return (
    <div className="payment-wrapper">
      <div className="payment-container">
        <h2>Renew line of credit</h2>
        <div className="payment-input-box">
          <span>Total amount to pay:</span>
          <input className="payment-input" />
        </div>
        <div />
        <div className="payment-credit-text-info">
          <p className="payment-credit-text-info-p-indent ">
            <span>Monthly fee</span>
            <span>20.00 € </span>
          </p>
          <p className="payment-credit-text-info-p">
            <span>Monthly payment</span>
            <span>9.95 € </span>
          </p>
        </div>
        <div className="payment-credit-text-choice">Choose one of the four payment methods to return your monthly fee:</div>
        {renderPaymentCards(bankIcons)}
      </div>
    </div>
  );
};

export default LoanPayment;
