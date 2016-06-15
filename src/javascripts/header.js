import React from 'react'

// import 'stylesheets/modules/header'
// import 'stylesheets/utilities/clearfix'

const Header = React.createClass({
  render () {
    return (
      <div className='header u-clearfix'>
        <div className="header__edition"></div>
        <div className="header__main"></div>
      </div>
    )
  }
})

export default Header
