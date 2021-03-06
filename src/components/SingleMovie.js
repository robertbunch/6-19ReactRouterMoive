import React from 'react';
import axios from 'axios';
import config from '../config';
import Spinner from './Spinner'

class SingleMovie extends React.Component{
    constructor(){
        super();
        this.state = {
            movieData: {}
        }
    }

    async componentDidMount(){
        const movieId = this.props.match.params.movieId;
        const thisMovieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${config.api_key}`;
        const resp = await axios.get(thisMovieDetailUrl);
        console.log(resp.data);
        this.setState({
            movieData: resp.data
        })
    }

    render(){
        if(this.state.movieData.id === undefined){
            return(<Spinner />)
        }
        return(
            <div>
                <img src={`http://image.tmdb.org/t/p/w300${this.state.movieData.production_companies[0].logo_path}`} />
                <h2>{this.state.movieData.tagline}</h2>
                <p>{this.state.movieData.overview}</p>
                <img src={`http://image.tmdb.org/t/p/w300${this.state.movieData.poster_path}`} />
                <h2>Believe or not they spent ${this.state.movieData.budget} on this movie!</h2>
            </div>
        )
    }
}

export default SingleMovie;