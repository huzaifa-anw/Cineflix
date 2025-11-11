import './LargeMovieCard.css'

export default function LargeMovieCard ({title, imageBaseURL, backDropPath}) {
    return(
        <div className="large-movie-card">
            <div className="image-container">
                <img src={`${imageBaseURL}/w780/${backDropPath}`} />
            </div>
            <div className="details-container">
                <p>{title}</p>
            </div>
        </div>
    );
}