// libraries
import React, { useEffect, useState } from 'react';
import Range from 'rc-slider';
import { useNavigate } from 'react-router-dom';
// types
import { Amount, Email } from 'types/types';
// constants
import { RANGE_MARKS, SERVER_DATA } from 'constants/serverData';
// style
import 'rc-slider/assets/index.css';

const shiftOne = 1;

const CalculatorForm = ({ userEmail }: Email) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number>(SERVER_DATA[0].amount);
  const [term, setTerm] = useState(SERVER_DATA[0].term);
  const [userAmounts, setUserAmounts] = useState<Array<Amount>>();

  const arrayAmount: Array<number> = [];
  const arrayTerm: Array<number> = [];

  const valueCredit = {
    amount: amount.toString(),
    term: term.toString(),
    condition: 'Active',
  };

  (() => {
    Object.entries(SERVER_DATA).forEach(([key]) => {
      arrayAmount.push(SERVER_DATA[Number(key)].amount);
      arrayTerm.push(SERVER_DATA[Number(key)].term);
    });
  })();

  useEffect(() => {
    setUserAmounts(JSON.parse(localStorage.getItem(userEmail)));
  }, [userEmail]);

  if (userAmounts ? userAmounts[userAmounts.length - shiftOne].condition === 'Active' : false) {
    navigate('/personalArea/CreditDescription');
  }

  const closestNumber = (
    arrayNumber: Array<number>,
    goal: number,
  ) => arrayNumber.reduce((previous: number, current: number) => (Math.abs(current - goal)
  < Math.abs(previous - goal) ? current : previous));

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === 'amount') {
      setAmount(closestNumber(arrayAmount, Number(event.target.value)));

      return;
    }
    setTerm(closestNumber(arrayTerm, Number(event.target.value)));
  };

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === 'amount') {
      setAmount(Number(event.target.value));
      setTerm(SERVER_DATA.filter((e) => e.amount === closestNumber(arrayAmount, Number(event.target.value)))[0].term);
    }
    if (event.target.id === 'term') {
      setTerm(Number(event.target.value));
      setAmount(SERVER_DATA.filter((e) => e.term === closestNumber(arrayTerm, Number(event.target.value)))[0].amount);
    }
  };

  const handleChangeRange = (value: number | number[]) => {
    if (typeof value === 'number') {
      setAmount(Number(value));
      setTerm(SERVER_DATA.filter((e) => e.amount === closestNumber(arrayAmount, value))[0].term);
    }
  };

  const saveCredit = () => {
    if (localStorage.getItem(userEmail)) {
      const userCredit = JSON.parse(localStorage.getItem(userEmail));
      const newCredits = [...userCredit, valueCredit];

      localStorage.setItem(userEmail, JSON.stringify(newCredits));
      navigate('/personalArea/creditDescription');

      return;
    }

    localStorage.setItem(userEmail, JSON.stringify([valueCredit]));
    navigate('/personalArea/creditDescription');
  };

  return (
    <div className="calculator-wrapper">
      <div className="calculator-container">
        <div className="calculator-header-card">
          <p className="calculator-header-text">Your line of credit is active</p>
        </div>
        <div className="calculator-main-card">
          <div className="calculator-main-card-div">
            <span className="calculator-main-card-span">How much do you need?</span>
            <div className="calculator-container-main-card-container">
              <input
                className="calculator-main-card-input"
                id="amount"
                onBlur={handleBlur}
                onChange={handleChangeValue}
                type="number"
                value={amount}
              />
              <span className="calculator-icon-text">
                €
              </span>
            </div>

          </div>
          <div className="calculator-main-slider">
            <Range marks={RANGE_MARKS} max={500} min={100} onChange={handleChangeRange} step={100} value={amount} />
          </div>
          <div className="calculator-main-card-div">
            <span className="calculator-main-card-span">Total length</span>
            <div className="calculator-container-main-card-container">
              <input
                className="calculator-main-card-input-month"
                id="term"
                onBlur={handleBlur}
                onChange={handleChangeValue}
                type="number"
                value={term}
              />
              <span className="calculator-icon-text">
                M
              </span>
            </div>
          </div>
        </div>
        <div className="calculator-footer-card">
          <div>
            <span className="calculator-footer-span-condition">Return date:</span>
            <span className="calculator-footer-span-text">14/08/2025</span>
          </div>
          <div>
            <span className="calculator-footer-span-condition">50 installments of:</span>
            <span className="calculator-footer-span-text">10€</span>
          </div>
        </div>
        <button className="button next" onClick={saveCredit}>
          Request your loan
        </button>
      </div>
    </div>
  );
};

export default CalculatorForm;
