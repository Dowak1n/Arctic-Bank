// libraries
import React from 'react';
// constants
import { BREAD_CRUMBS_ELEMENTS } from 'components/layuot/Breadcrambs/config';

const Breadcrumbs = () => {
  const renderBreadcrumbsElements = (array: Array<string>) => array.map(
    (text) => <div key={text} className="breadcrumbs-content">{text}</div>,
  );

  return (
    <div className="breadcrumbs">
      <div className="row">
        {renderBreadcrumbsElements(BREAD_CRUMBS_ELEMENTS)}
      </div>
    </div>
  );
};

export default Breadcrumbs;
