import React from 'react';
import { Link } from 'react-router-dom';

function Movie(props){
    return(
        <div className="col s3">
            <Link to={`/movie/${props.movie.id}`}>
                <img src={`http://image.tmdb.org/t/p/w300${props.movie.poster_path}`} />
            </Link>
        </div>
    )
}

export default Movie;