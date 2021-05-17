import React from "react";
import MovieSearch from "./MovieSearch";
import "../../styles/MovieBody.css"



function MovieBody() {
    return (
        <div className="movie__container">
          <MovieSearch/>
            <div className="movie__result">
                Start search imdb...
            </div>
        </div>
    )
}

export default MovieBody;