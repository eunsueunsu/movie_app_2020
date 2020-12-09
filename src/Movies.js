import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// state가 없는 경우  class component일 필요가 없음

function Movies({ year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) =>
                        <li key={index} className="genres__genre">
                            {genre}
                        </li>)}
                </ul>
                <p className="movie_summary">{summary.slice(0,200)}...</p>

            </div>
        </div>
    )
    // 리액트에서는 className으로 -
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired

}

export default Movies;
