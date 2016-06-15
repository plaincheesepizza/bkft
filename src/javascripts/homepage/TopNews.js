/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

const TopNews = (props) => {
  var topStories = [
    {
      type: 'feature',
      column: 'Q&A',
      title: '5 Stocks to Buy as Oil Heads Past $50 a Barrel',
      author: 'Dimitra Defotis',
      preview: 'David Ginther\'s Ivy Engergy fund has beaten the market in busts and booms. Now he\'s cool on MLPs',
      timestamp: undefined,
      imglink: undefined
    },
    {
      type: 'thumb',
      column: 'Getting Technical',
      title: 'As Chip Stocks Rally, Charts See Gains Ahead',
      author: 'Michael Kahn',
      preview: 'Technical indicators suggest that Intel, Qualcomm, Nvidia, and even Cypress ahve wind in their sails',
      timestamp: undefined,
      imglink: undefined
    },
    {
      type: 'thumb',
      column: 'Wall Street\'s Best Minds',
      title: 'Investors Should Focus On Hitting Singles',
      author: 'Zachary Karabell',
      preview: 'Strive for that happy medium between taking on too much risk and taking on too little',
      timestamp: undefined,
      imglink: undefined
    },
    {
      type: 'thumb',
      column: 'Read This, Spike That',
      title: 'Are Time Warner, Netflix Good Fits for Apple?',
      author: 'John Kimelman',
      preview: 'A story about merger talk has generated buzz. But the rationale may not stand up to scrutiny.',
      timestamp: undefined,
      imglink: undefined
    },
    {
      type: 'thumb',
      column: 'Feature',
      title: '5 REITs Worth a Look',
      author: 'Sandra Ward',
      preview: 'Come September, real estate will become its own sector in the S&P 500 and MSCI equity indexes.',
      timestamp: undefined,
      imglink: undefined
    },
    {
      type: 'thumb',
      column: 'Barron\'s Take',
      title: 'Starbucks\'s Cold Coffee Could Heat Up the Stock',
      author: 'Johanna Bennett',
      preview: 'Cold coffee options, including the nitrogen-infused "Nitro Cold Brew,", tap a large and growing market',
      timestamp: undefined,
      imglink: undefined
    },
    {
      type: 'sponsored',
      column: 'Second Line',
      title: 'Oaktree\'s Howard Marks Likes Oil Investments',
      author: undefined,
      preview: 'Marks touches on oil investments and social-media stocks and the London Value Investor Conference.',
      timestamp: undefined,
      imglink: undefined
    }
  ]
  var latest = [
    {
      type: 'noimg',
      column: 'Stocks To Watch',
      title: 'Six Banks That Will Benefit From Higher Rates',
      author: 'Name LastName',
      preview: undefined,
      timestamp: '43 minutes ago',
      imglink: undefined
    },
    {
      type: 'noimg',
      column: 'Tech Trader Daily',
      title: 'Apple: The Good News Is There\'s Always iPhone 8, Says Baird',
      author: 'Name LastName',
      preview: undefined,
      timestamp: '58 minutes ago',
      imglink: undefined
    },
    {
      type: 'noimg',
      column: 'ETFs',
      title: 'Is Index Investing Drying Up Trading of Small=-Cap Stocks?',
      author: 'Name LastName',
      preview: undefined,
      timestamp: '8:05 am',
      imglink: undefined
    },
    {
      type: 'noimg',
      column: 'Mutual Funds & Hnext Funds',
      title: 'Icahn Discloses \'Large\' Position in Allergan.',
      author: 'Name LastName',
      preview: undefined,
      timestamp: 'April 28',
      imglink: undefined
    },
    {
      type: 'noimg',
      column: 'Income Investing',
      title: 'Manufacturing Improves After April Dip',
      author: 'Name LastName',
      preview: undefined,
      timestamp: 'April 28',
      imglink: undefined
    },
    {
      type: 'noimg',
      column: 'Emerging Markets',
      title: 'South Africa Trade Surplus Narrows, Rand Flat.',
      author: 'Name LastName',
      preview: undefined,
      timestamp: 'April 28',
      imglink: undefined
    },
    {
      type: 'noimg',
      column: 'Asia Stocks to Watch',
      title: 'Did India Really Grow 7.9%?',
      author: 'Name LastName',
      preview: undefined,
      timestamp: 'April 28',
      imglink: undefined
    }
  ]
  var sectionClassName = 'section ' + props.sectionClassName; 

  function formatStory(item, type) {
      item.classname = 'element newsItem is-' + item.type;
      switch(type) {
        case 'featured' :
          return (
            <div className={item.classname}>
              <div className="newsItem__img"></div>
              <div className="newsItem__column">{item.column}</div>
              <div className="newsItem__title">{item.title}</div>
              <div className="newsItem__author">By {item.author}</div>
              <div className="newsItem__preview">{item.preview}</div>
            </div>
          );
        case 'sponsored':
          return (
            <div className={item.classname}>
              <div className="newsItem__column">{item.column}</div>
              <div className="newsItem__title">{item.title}</div>
              <div className="newsItem__img"></div>
              <div className="newsItem__preview">{item.preview}</div>
            </div>
          );
          break;
        case 'thumb':
        default:
          return (
            <div className={item.classname}>
              <div className="newsItem__column">{item.column}</div>
              <div className="newsItem__title">{item.title}</div>
              <div className="newsItem__author">By {item.author}</div>
              <div className="newsItem__img"></div>
              <div className="newsItem__preview">{item.preview}</div>
            </div>
          );
      }

  }
  function formatBlog(item) {
      item.classname = 'element blogItem is-' + item.type;
      return (
        <div className={item.classname}>
          <div className="blogItem__column">{item.column}</div>
          <div className="blogItem__author">By {item.author}</div>
          <div className="blogItem__title">{item.title}</div>
          <div className="blogItem__timestamp">{item.timestamp}</div>
        </div>
      );
  }

  return (
      <div className={sectionClassName}>
        <div className="container">

          <div className="row section__content">
            <div className="column w8-c5 w12-c5 w16-c8">
                <div className="feed">
                    <div className="row">
                        <div className="column">{formatStory(topStories[0], 'featured')}</div>
                    </div>
                    <div className="row">
                        <div className="column w5-c5 w8-c4">{formatStory(topStories[1], 'thumb')}</div>
                        <div className="column w5-c5 w8-c4">{formatStory(topStories[2])}</div>
                    </div>
                    <div className="row">
                        <div className="column w5-c5 w8-c4">{formatStory(topStories[3])}</div>
                        <div className="column w5-c5 w8-c4">{formatStory(topStories[4])}</div>
                    </div>
                    <div className="row">
                        <div className="column w5-c5 w8-c4">{formatStory(topStories[5])}</div>
                        <div className="column w5-c5 w8-c4">{formatStory(topStories[6], 'sponsored')}</div>
                    </div>
                </div>
            </div>

            <div className="column w8-c3 w12-c3 w16-c4">
                <div className="feed u-clear">
                    <div className="row">
                        <div className="column w3-c3 w4-c4 w8-c4 w12-c4">{formatBlog(latest[0])}</div>
                        <div className="column w3-c3 w4-c4 w8-c4 w12-c4">{formatBlog(latest[1])}</div>
                        <div className="column w3-c3 w4-c4 w8-c4 w12-c4">{formatBlog(latest[2])}</div>
                        <div className="column w3-c3 w4-c4 w8-c4 w12-c4">{formatBlog(latest[3])}</div>
                        <div className="column w3-c3 w4-c4 w8-c4 w12-c4">{formatBlog(latest[4])}</div>
                        <div className="column w3-c3 w4-c4 w8-c4 w12-c4">{formatBlog(latest[5])}</div>
                        <div className="column w3-c3 w4-c4 w8-c4 w12-c4">{formatBlog(latest[6])}</div>
                    </div>
                </div>
            </div>

            <div className="column w12-c4 w16-c4 u-floatRight">
                <div className="row">
                    <div className="column w4-c4 w8-c4">
                        <div className="element element--default marketData">
                            <h4 className="element__title"><label className="label">Market Data</label></h4>
                            <div className="element__body"></div>
                        </div>
                    </div>
                    <div className="column w4-c4 w8-c4">
                        <div className="element element--default element--ad">
                            <div className="ad__title">Advertisement</div>
                            <div className="ad__body both">
                                <div className="ad__body">
                                    <label className="label">300x250</label>
                                </div>
                                <label className="label">300x600</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
  );
};

export default (TopNews);