const Movie = ({ movie }) => {
    return(
        <li key={movie.id} className = "movie-item">
            <img src = {movie.poster} alt = {movie.title} className = "movie-poster" width = "200px" height = "200px" />
                            <p>
                                {movie.title} by {movie.director} was released in {movie.year}.
                            </p>
                            <p>Rating: {movie.rating}</p>
                            <p>Genre: {movie.genre}</p>
        </li>
    )
};

export default Movie;