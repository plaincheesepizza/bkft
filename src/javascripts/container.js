import React from 'react'
import Header from 'javascripts/header'
import Footer from 'javascripts/footer'

import TopNews from 'javascripts/homepage/TopNews';
import Columns from 'javascripts/homepage/Columns';
import MostPopular from 'javascripts/homepage/MostPopular';
import MarketIntelligence from 'javascripts/homepage/MarketIntelligence';
import Magazine from 'javascripts/homepage/Magazine';
import BarronsAsia from 'javascripts/homepage/BarronsAsia';
import Penta from 'javascripts/homepage/Penta';
import ReportCard from 'javascripts/homepage/ReportCard';

// import 'stylesheets/modules/container'

const Container = React.createClass({
  render () {
    return (
      <div className='content'>
      	<Header />

        	<TopNews sectionClassName="u-bgT1"/>
        	<Columns />
        	<MostPopular sectionClassName="u-bgT2"/>
        	<MarketIntelligence sectionClassName="u-bgD1"/>
        	<Magazine sectionClassName="u-bgT1"/>
        	<BarronsAsia />
        	<Penta sectionClassName="u-bgT1"/>
        	<ReportCard sectionClassName="u-bgD1"/>

      	<Footer />
      </div>
    )
  }
})

export default Container
