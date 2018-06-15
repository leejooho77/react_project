import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Menubar extends Component {
	render() {
		return (
			<div className="menubar">
				<Link to="/" className="logo">
					<img src="https://fsprdcdnpublic.azureedge.net/global-pictures/tournaments-sq-4/254645_w" />
				</Link>
				<div className="menuitems">
					<Link to="/" className="link">Home</Link>
	            	<Link to="/" className="link">Teams</Link>
	            	<Link to="/" className="link">Stages</Link>
            	</div>
			</div>
		)
	}
}

export default Menubar;