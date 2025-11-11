import './LargeMovieCard.css'
import Rating from '@mui/material/Rating';

export default function LargeMovieCard ({title, imageBaseURL, backDropPath, userVoteAvg, totalVotes}) {
    return(
        <div className="large-movie-card">
            <div className="image-container">
                <img src={`${imageBaseURL}/w780/${backDropPath}`} />
            </div>
            <div className="details-container">
                <p>{title}</p>
                <div className="rating-container">
                    <Rating name="half-rating-read" value={userVoteAvg/2} precision={0.1} readOnly />
                    <p className="votecount">{`(${totalVotes})`}</p>
                </div>
            </div>
        </div>
    );
}