import React, { Component } from 'react';

class Header extends Component {

	render() {
		return (
			<header>
          		<h1 className='headline'>Culinary Kiel</h1>
          		<h1>
	          		<i tabIndex='0' className="glyphicon glyphicon-remove"
	          		title='Hide Sidebar' onClick={() => {this.props.hideSidebar()}}></i>
          		</h1>
        	</header>
		)
	}

}

export default Header;