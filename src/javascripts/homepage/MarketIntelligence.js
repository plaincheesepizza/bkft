/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Utility from 'javascripts/utility';

const MarketIntelligence = (props) => {

  var u = Utility;
  var stories = [
    { 
      type: 'feature2',
      column: 'Hot Research PM',
      title: 'Veeva Stock Seen Reaching $35',
      author: 'Name Lastname',
      preview: 'The cloud company remains a compelling opportunity with 30%-plus recurring revenue growth',
      theme: 'light'
    },
    { 
      type: 'thumb',
      column: 'Investors\' Soapbox AM',
      title: 'Three Bank Picks for Dividend Payouts',
      author: 'Name Lastname',
      preview: 'BB&T, Fifth Thrid and M&T Bank could rank on the higher end of the range and above 30%',
      theme: 'light'
    },
    { 
      type: 'thumb',
      column: 'Feature',
      title: 'Two REITs to Outperform',
      author: 'Name Lastname',
      preview: 'Contrary to popular belief, Lorem Ipssum is not simply random text. It has roots in a piece of classical Latin literature from 45BC.',
      theme: 'light'
    },
  ]
  var sectionClassName = props.sectionClassName ? 'section ' + props.sectionClassName : 'section'; 

  return (
      <div className={sectionClassName}>
        <div className="container">
          <h2 className="section__title">Market MarketIntelligence</h2>
          <div className="section__content row">
            <div className="column w16-c4">{u.formatStory(stories[0], 'featured2')}</div>
            <div className="column w16-c4">
              {u.formatStory(stories[1], 'thumb')}
              {u.formatStory(stories[2], 'thumb')}
            </div>
          </div>
        </div>
      </div>
  );
};

export default (MarketIntelligence);