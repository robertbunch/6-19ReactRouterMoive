import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie'
import NavBar from './components/NavBar';

class App extends Component{
  render(){
    return(
        <Router>
			<div className="container">
				<div className="row">
					<Route path="/" component={NavBar} />
            		<Route exact path="/" component={Home} />
					<Route path="/movie/:movieId" component={SingleMovie} />
					<Route path="/search/:searchTerm" component={SearchPage} />
				</div>
			</div>
        </Router>
    )
  }
}

export default App;