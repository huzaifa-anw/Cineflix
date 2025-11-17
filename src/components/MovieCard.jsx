import { Skeleton } from '@mui/material';
import './MovieCard.css'

export default function MovieCard ({title, imageBaseURL, posterPath, isTMLoaded}) {
    return(
        <div className="movie-card">
            <div className="poster-container">
                {isTMLoaded ?  <img src={`${imageBaseURL}/w185/${posterPath}`} /> : <Skeleton animation="wave" variant="rectangular" width={185} height={278} />}
            </div>
            <div className="details-container">
                <div className="title">
                    {isTMLoaded ? <p>{title}</p> : <Skeleton animation="wave" variant="text" sx={{ fontSize: '2vh' }} />}
                </div>
            </div>
        </div>
    );
}