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

const Columns = (props) => {

  var sectionClassName = props.sectionClassName ? 'section ' + props.sectionClassName : 'section'; 
  var u = Utility;
  var stories = [
    {
      type: 'column',
      column: 'Up and Down Wall Street',
      title: '9 Closed-End Funds With Yields of Up to 10%',
      author: 'Randall W. Forsyth'
    },
    {
      type: 'column',
      column: 'Ahead of the Crowd',
      title: 'Amazon Could Be Largest U.S. Company by 2020',
      author: 'Jack Hough'
    },
    {
      type: 'column',
      column: 'Getting Technical',
      title: 'Gold Stocks Break Out: \'Floodgates of Demand',
      author: 'Michael Kahn'
    },
    {
      type: 'column',
      column: 'The Striking Price',
      title: 'Actually, Gold Can Provide Income: Here\'s the Trade',
      author: 'Steven M. Sears'
    },
    {
      type: 'column',
      column: 'Read This, Spike That',
      title: 'Summertime Won\'t Bring Easy Living for Investors',
      author: 'John Kimelman'
    },
    {
      type: 'column',
      column: 'Stock Alert',
      title: 'This Sam Zell Favorite Could Double in Value',
      author: 'David Englander'
    },
    {
      type: 'column',
      column: 'Up and Down Wall Street',
      title: 'When Donald Trump Said \'You\'re Fired,\' 25 Years Ago',
      author: 'Alan Abelson'
    },
    {
      type: 'column',
      column: 'Editorial Commentary',
      title: 'With or Without Britain, Deregulation Should Be the',
      author: 'Steven M. Sears'
    },
  ]

  return (
      <div className={sectionClassName}>
        <div className="container">
          <h2 className="section__title">Columns</h2>
          <div className="section__content">
            <div className="row">
              <div className="column w16-c4">{u.formatStory(stories[0], 'featuredAuthor')}</div>
              <div className="column w16-c4">{u.formatStory(stories[1], 'featuredAuthor')}</div>
              <div className="column w16-c4">{u.formatStory(stories[2], 'featuredAuthor')}</div>
              <div className="column w16-c4">{u.formatStory(stories[3], 'featuredAuthor')}</div>
            </div>
            <div className="row">
              <div className="column w16-c4">{u.formatStory(stories[4], 'featuredAuthor')}</div>
              <div className="column w16-c4">{u.formatStory(stories[5], 'featuredAuthor')}</div>
              <div className="column w16-c4">{u.formatStory(stories[6], 'featuredAuthor')}</div>
              <div className="column w16-c4">{u.formatStory(stories[7], 'featuredAuthor')}</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default (Columns);