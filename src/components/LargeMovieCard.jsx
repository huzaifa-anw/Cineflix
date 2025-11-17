import { Skeleton } from '@mui/material';
import './LargeMovieCard.css'
import Rating from '@mui/material/Rating';

export default function LargeMovieCard ({title, imageBaseURL, backDropPath, userVoteAvg, totalVotes, isNPMLoaded}) {
    return(
        <div className="large-movie-card">
            <div className="image-container">
                {isNPMLoaded ? <img src={`${imageBaseURL}/w780/${backDropPath}`} /> : <Skeleton animation="wave" variant="rounded" sx={{ width: '100%', height: '30vh' }} />
}
            </div>
            <div className="details-container">
                <p>{isNPMLoaded ? title : <Skeleton animation="wave" variant='text' sx={{ fontSize: '2vh' }} />}</p>
                <div className="rating-container">
                    {isNPMLoaded ? <Rating name="half-rating-read" value={userVoteAvg/2} precision={0.1} readOnly /> : <Skeleton animation="wave" />}
                    {isNPMLoaded ? <p className="votecount">{`(${totalVotes})`}</p> : <Skeleton animation="wave" />}
                </div>
            </div>
        </div>
    );
}