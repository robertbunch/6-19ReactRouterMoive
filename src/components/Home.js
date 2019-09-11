import React, { Component } from 'react';
import config from '../config';
import axios from 'axios';
import Movie from './Movie';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            movieList: []
        }
    }

    async componentDidMount(){
        const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;
        const resp = await axios.get(nowPlayingUrl)
        const movieResults = resp.data.results
        console.log(movieResults);
        this.setState({
            movieList: movieResults
        })
    }

    render(){
        const movies = this.state.movieList.map((movie,i)=>
            <Movie movie={movie} key={i} />)

        return(
            <div className="col s12">
                {movies}
            </div>            
        )
    }
}

export default Home;