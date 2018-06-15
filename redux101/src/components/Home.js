import React, { Component } from 'react';
import { connect } from 'react-redux';
// We need some glue! This component needs to know about the Store.
// Just because it's inside the Provider, isn't enough.
// React-redux only exposes the store when it has to for performance.
// To accomplish this, we use the connect method from react-redux module (the glue between React and Redux).

class Home extends Component {
	render() {
		return(
			<h1>{this.props.homeText}</h1>
		)
	}
}

// We have connect. But we need a way to get the stuff in the store to map to the props of this Component.
function mapStateToProps(state) {
	// THE STATE PARAMETER IS THE ROOT REDUCER
	// this function will return an object, each property will be mapped to this components props, each value will be a piece of state or a property of the rootReducer
	return {
		homeText: state.home
	}
}

// inside of containers, we don't export the component.
// we export connect.
// connect is a function and we pass that function mapStateToProps.
// connect returns a function, which expects the component
export default connect(mapStateToProps)(Home);