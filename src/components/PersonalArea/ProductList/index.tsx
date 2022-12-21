// libraries
import React, { useEffect, useState } from 'react';
// types
import { Amount, Email } from 'types/types';

const ProductList = ({ userEmail }: Email) => {
  const [userAmounts, setUserAmounts] = useState<Array<Amount>>();
  const [isUserAmounts, setIsUserAmounts] = useState<boolean>();

  useEffect(() => {
    setUserAmounts(JSON.parse(localStorage.getItem(userEmail)));

    if (JSON.parse(localStorage.getItem(userEmail)) === null) {
      setIsUserAmounts(false);

      return;
    }

    setIsUserAmounts(true);
  }, [userEmail]);

  const renderTextInfo = () => Object.keys(userAmounts).map((key) => (
    <p key={Number(key)} className="credit-list-element">
      {`${userAmounts[Number(key)].amount} € ${userAmounts[Number(key)].condition}`}
    </p>
  ));

  return (
    <div className="credit-list">
      { isUserAmounts === false && (
        <h2>You dont have loans</h2>
      )}

      { userAmounts && (
        <>
          <h2>Your loans</h2>
          {renderTextInfo()}
        </>
      )}
    </div>
  );
};

export default ProductList;
