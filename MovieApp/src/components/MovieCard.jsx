import '../css/MovieCard.css'
// we accept an object of movie that contains title, release_date, image -> props
// className for css class
// we want movie.url for the movie image
// say we want to click 'favorite' button in that case, we make another function (onFavoriteClick) inside this function

import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({movie}){

    const {isFavorite, addToFavorites, remFromFavorites} = useMovieContext() // this is needed only to persist Favorites data otherwise not needed
    // now i can get all states into this component

    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) remFromFavorites(movie.id)
        else addToFavorites(movie) 
    }
    
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}> ♥ </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>

    </div>
}

// whenever we want to access something from another file, we export

export default MovieCard