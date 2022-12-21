// libraries
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// types
import { Amount, Email } from 'types/types';
// assets
import { ReactComponent as Active } from 'assets/true_icon.svg';
import { ReactComponent as Error } from 'assets/error.svg';
import { ReactComponent as Arrow } from 'assets/arrow.svg';
import { ReactComponent as ArrowForward } from 'assets/arrowForward.svg';

type CreditStatus = {
  title: string,
  icon: React.ReactElement<HTMLElement>,
  isButtonActive: boolean
};

const shiftOne = 1;

const CreditDescription = ({ userEmail }: Email) => {
  const navigate = useNavigate();
  const [isShowDetails, setIsShowDetails] = useState<boolean>(false);
  const [userAmounts, setUserAmounts] = useState<Array<Amount>>(JSON.parse(localStorage.getItem(userEmail)));
  const [creditStatus, setCreditStatus] = useState<CreditStatus>(
    {
      title: 'Active',
      icon: <Active />,
      isButtonActive: false,
    },
  );

  useEffect(() => {
    if (userAmounts ? userAmounts[userAmounts.length - shiftOne].condition === 'Paid' : false) {
      setCreditStatus({
        title: 'Paid',
        icon: <Error />,
        isButtonActive: true,
      });

      return;
    }

    setCreditStatus({
      title: 'Active',
      icon: <Active />,
      isButtonActive: false,
    });
  }, [userAmounts]);

  const handleChange = () => (isShowDetails ? setIsShowDetails(false) : setIsShowDetails(true));

  const handleSubmit = () => {
    navigate('/personalArea/loanPayment');
  };

  const renderCreditStatus = () => (
    <div className="product-header-state">
      <div className="product-header-state-align">
        <span className="product-header-state-margin">
          {creditStatus.icon}
        </span>
        <span>
          {creditStatus.title}
        </span>
      </div>
    </div>
  );

  return (
    <div className="product-container">
      <div className="product-header">
        <div className="product-header-plan">
          <p className="product-header-plan-text">Your plan:</p>
          <p className="product-header-plan-value">
            {`${userAmounts ? userAmounts[userAmounts.length - shiftOne].amount : '...'} €`}
          </p>
        </div>
        {renderCreditStatus()}
      </div>
      <div className="product-main">
        <div className="product-main-text">
          <span>Subscription</span>
          <span className="product-main-text-span">9,99 €/euro</span>
        </div>
        <div className="product-main-text">
          <span>billing date</span>
          <span className="product-main-text-span">13/08/2021</span>
        </div>
        <div className={isShowDetails ? 'open-list' : 'hidden-list'} id="content">
          <div className="product-main-text">
            <span>Contract number</span>
            <span className="product-main-text-span">1035727</span>
          </div>
          <div className="product-main-text">
            <span>Acceptance date</span>
            <span className="product-main-text-span">13/08/2021</span>
          </div>
          <div className="product-main-text">
            <span>Refund Amount</span>
            <span className="product-main-text-span">€0 See details</span>
          </div>
          <div className="product-main-text">
            <span>Total to return</span>
            <span className="product-main-text-span">
              {`${userAmounts ? userAmounts[userAmounts.length - shiftOne].amount : '...'} €`}
            </span>
          </div>
          <div className="product-main-text">
            <span>amount to return</span>
            <span className="product-main-text-span">
              {`${userAmounts ? userAmounts[userAmounts.length - shiftOne].amount : '...'} €`}
            </span>
          </div>
          <div className="product-main-text">
            <span>Total length</span>
            <span className="product-main-text-span">
              {`${userAmounts ? userAmounts[userAmounts.length - shiftOne].term : '...'} months`}
            </span>
          </div>
          <div className="product-main-text">
            <span>Payment calendar</span>
            <span className="product-main-text-span">To show</span>
          </div>
          <div className="product-main-text">
            <span>loan status</span>
            <span className="product-main-text-span">Outstanding</span>
          </div>
        </div>
        <button className="button less" onClick={handleChange}>
          See Less
          <Arrow id="arrow" />
        </button>
      </div>
      <button
        className="button step"
        disabled={creditStatus.isButtonActive}
        onClick={handleSubmit}
      >
        <span>Monthly statement</span>
        <ArrowForward />
      </button>
    </div>
  );
};

export default CreditDescription;
