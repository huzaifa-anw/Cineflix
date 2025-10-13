export default function MovieCard ({title, imageBaseURL, posterPath}) {
    return(
        <div className="movie-card">
            <img src={`${imageBaseURL}/w185/${posterPath}`} />
            <p>{title}</p>
        </div>
    );
}