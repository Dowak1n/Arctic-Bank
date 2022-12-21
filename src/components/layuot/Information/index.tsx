// libraries
import React from 'react';
// config
import { INFORMATION_ELEMENTS } from 'components/layuot/Information/config';

const Information = () => {
  const renderInformationText = (array: Array<string>) => array.map(
    (text) => <p key={text} className="information-text">{text}</p>,
  );

  return (
    <div>
      <h4>
        BASIC INFORMATION FOR PROTECTION OF PERSONAL DATA
      </h4>
      {renderInformationText(INFORMATION_ELEMENTS)}
    </div>
  );
};

export default Information;
