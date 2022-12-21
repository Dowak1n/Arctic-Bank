// libraries
import React from 'react';
// assets
import { ReactComponent as Instantor } from 'assets/instantor.svg';
import { ReactComponent as EKomi } from 'assets/eKomi.svg';
import { ReactComponent as ConfinzaOnline } from 'assets/ConfinzaOnline.svg';
import { ReactComponent as MasterCard } from 'assets/masterCard.svg';
import { ReactComponent as Visa } from 'assets/Visa.svg';
import { ReactComponent as Aemip } from 'assets/aemip.svg';

type FieldProps = {
  className: string
};

const Partners = (values: FieldProps) => {
  const { className } = values;

  return (
    <div className={className}>
      <Instantor />
      <EKomi />
      <ConfinzaOnline />
      <MasterCard />
      <Visa />
      <Aemip />
    </div>
  );
};

export default Partners;
