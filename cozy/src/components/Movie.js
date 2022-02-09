import React from "react";

const Movie = (props) =>{
    return(
        <div className="movie">
        <div className="movie-title">{props.movie.title}</div>
        <div className="novie-year">{props.movie.year}</div>
      </div>
    );
}

export default Movie;