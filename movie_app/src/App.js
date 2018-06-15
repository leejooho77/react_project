import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Poster from './Poster';
import SearchBar from './SearchBar';
import About from './About';
import MovieSearch from './MovieSearch';
import SingleMovie from './SingleMovie';
import BootstrapNavBar from './BootstrapNavBar';
import Login from './Login';
import Register from './Register';
// add react router
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  // constructor tuns ONCE. When the object/componenet is created
  constructor(props) {
    super(props);
    // After super, we can use the word "this"
    // set the initial state of the car: this.state.moviePosters to []
    this.state = {
      moviePosters: []
    }
    this.newUserSearch = this.newUserSearch.bind(this);
  }

  // special lifecycle method
  // will run as soon as the FIRST render runs
  // this is where AJAX goes
  componentDidMount() {
    console.log("The component has mounted!");
    const url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
    $.getJSON(url, (movieData)=>{
      console.log(movieData);
      this.setState({
          moviePosters: movieData.results
      });
    });
  }

  newUserSearch(movieTitle) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=${movieTitle}`;
    $.getJSON(url,(movieData)=>{
      console.log(movieData);
      this.setState({
        moviePosters: movieData.results
      });
    });
  }

  // EVERY React component MUST have a render
  render() {

    if(this.state.moviePosters.length === 0) {
      return (<h1>Loading...</h1>);
    }

    console.log(this.state.moviePosters);
    const posters = this.state.moviePosters.map((poster, index) =>{
      const imagePath = `http://image.tmdb.org/t/p/w300${poster.poster_path}`;
      return (<Poster movie={poster} poster={imagePath} />)
    });
    console.log(posters);
    console.log("Rendering is running.....");
    return (
      // ROUTER GOES AROUND EVERYTHING
      <Router>
        <div className="App">
          <Route path="/" component={BootstrapNavBar} />
          <Route path="/" component={SearchBar} />
          <Route path="/about" render={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/*You don't always have to give it a component.
          You can five it a callback which can render components.*/}
          <Route exact path="/" render={()=>{
            return (
              <div>
                {posters}
              </div>
            )
          }} />
          <Route path="/search/:searchTerm" component={MovieSearch} />
          <Route path="/movie/:movieId" component={SingleMovie} />
        </div>
      </Router>
    );
  }
}

export default App;
