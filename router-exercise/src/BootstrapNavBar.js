import React, {Component} from 'react';
import Home from './Home';
import About from './About';
import App from './App';
import Images from './Images';
import Message from './MayorMessage';
import Weather from './Atlanta';
import Stadium from './Stadium';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

var atlImages = [
  'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
]


class BootstrapNavBar extends Component{
  render(){
    return(
    	<Router>
			<nav className="navbar navbar-default navbar-fixed-top">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <Link className="navbar-brand" to="#">WebSiteName</Link>
			    </div>
			    <ul className="nav navbar-nav">
			    	<Link to="/">Home</Link>
			      	<Link to="/about">About</Link>
			      	<Link to="/image">Images</Link>
			      	<Link to="/message">Mayor Message</Link>
			      	<Link to="/weather">Weather</Link>
			      	<Link to="/stadium">Stadium</Link>
			    </ul>
			  </div>
			  <Route exact path="/" render={()=>{
			  	return (
			  		<Home city="Atlanta"/>
			  	)
			  }} />
			  <Route path="/about" render={()=>{
			  	return (
			  		<About />
			  	)
			  }} />
			  <Route path="/image" render={()=>{
		          return (
		          	<div className="row">
		            	<Images image={atlImages} />
		            </div>
		           )
		        }} />
			  <Route path="/message" render={()=>{
			  	return (
			  		<Message />
			  	)
			  }} />
			  <Route path="/weather" render={()=>{
			  	return (
			  		<Weather />
			  	)
			  }} />
			  <Route path="/stadium" component={Stadium} />
			</nav>   
		</Router> 
	)
  }
}

export default BootstrapNavBar