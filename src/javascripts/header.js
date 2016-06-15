import React from 'react'

const Header = React.createClass({

	render () {

		var navarray = [
			'Home', 
			'Investing Ideas', 
			'Magazine', 
			'Market Data', 
			'Financial Advisors', 
			'Penta', 
			'Barron\'s Next'
		]
		
		function formatNavLinks(arr) {
			var links = arr.map(function(item) {
				return (<li className="nav__item"><a>{item}</a></li>);
			});
			return links;
		}

	    return (
	      <div className='header u-clearfix'>
			<div className="header__edition">
				<label className="edition__label">Edition: </label>
				<div className="edition__item is-selected">U.S.</div>
				<div className="edition__item">Asia</div>
			</div>
			<div className="container">
		        <div className="header__main">
		        	<div className="header__logo"></div>
		        </div>
				<div className="header__subscription">
					<button className="btn btn-line form-control header__signin">Sign In</button>
					<button className="btn btn-action form-control header__subscribe">Subscribe</button>
				</div>
			</div>
			<div className="nav">
				<ul className="nav__list">
					{formatNavLinks(navarray)}
				</ul>
			</div>
	      </div>
	    )
  }
})

export default Header
