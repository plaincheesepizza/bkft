/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

const BarronsAsia = (props) => {
  var sectionClassName = props.sectionClassName ? 'section ' + props.sectionClassName : 'section'; 

  return (
      <div className={sectionClassName}>
        <div className="container">
          <h2 className="section__title">Barron's Asia</h2>
          <div className="section__content row">
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
          </div>
        </div>
      </div>
  );
};

export default (BarronsAsia);