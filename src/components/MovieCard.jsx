import './MovieCard.css'

export default function MovieCard ({title, imageBaseURL, posterPath}) {
    return(
        <div className="movie-card">
            <div className="poster-container">
                <img src={`${imageBaseURL}/w185/${posterPath}`} />
            </div>
            <div className="details-container">
                <div className="title">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
}