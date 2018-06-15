import React, { Component } from 'react';
import { connect } from 'react-redux';
// this components job is to CHANGE redux state
// it will need a function to do so. Once the function runs, the dispatcher will let all reducers know
import { bindActionCreators } from 'redux';
// we need bindActionCreators from Redux so the action can dispatch to the reducers
import UpdateHome from '../actions/UpdateHome';

class Button extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event) {
		// console.log("User Click")
		this.props.updateHome();
	}

	render() {
		return(
			<button onClick={this.handleClick} className='btn btn-large btn-success'>Click Me!</button>
		)
	}
}

// GET data from redux
function mapStateToProps(state) {
	return {}
}

// update redux by a funcion
// mapDispatchToProps takes whatever functions that need to be sent out to the dispatcher, and makes then into props for this component
function mapDispatchToProps(dispatch) {
	// bindActionCreators takes 2 args:
	// 1. object: property of local prop name (this.props.whatever)
	// 	value: the callback or action
	// 2. dispatcher: 
	return bindActionCreators({ 
		updateHome: UpdateHome
	}, 
	dispatch)
}

// dispatch function always comes SECOND
export default connect(mapStateToProps, mapDispatchToProps)(Button);