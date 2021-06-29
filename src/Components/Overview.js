import React, { useEffect, useState } from 'react';
import axios from './axios'
import { APIKEY } from './Requests';
import imageNotFound from '../images/imageNotFound.png'
import './Overview.css'
import StarIcon from '@material-ui/icons/Star';
import { truncate } from './Helper'
import Chip from '@material-ui/core/Chip';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import {fetchVideoStream} from './Requests'
const base_url = "https://image.tmdb.org/t/p/original/";

const Overview = () => {
    const [movie, setMovie] = useState({});
    const [casts, setCasts] = useState([]);
    const [movie__id, setMovie__id] = useState(window.location.href.split('/')[3])
    const [simMovies, setSimMovies] = useState([])

    // const [loading ,setLoading] = useState(false)

    const [genres, setGenres] = useState([])
    useEffect(() => {
        async function fetchData() {

            const request1 = await axios.get(`/movie/${movie__id}?api_key=${APIKEY}&language=en-US`)

            // console.log(request1.data);

            const request2 = await axios.get(`/movie/${movie__id}/credits?api_key=${APIKEY}&language=en-US`);

            const request3 = await axios.get(`/movie/${movie__id}/similar?api_key=${APIKEY}&language=en-US`);

            setMovie(request1.data);
            setCasts(request2.data.cast);
            setSimMovies(request3.data.results);
            setGenres(request1.data.genres);
        }
        fetchData()
    }, [movie__id])

    const handleVideoStream = (movie_id) => {
        fetchVideoStream(movie_id)
    }
    const handleSimMovieClick = (movie_id) => {
        console.log(movie_id);
        setMovie__id(movie_id);
        window.location.href = `http://localhost:3000/${movie_id}/overview`;
        window.scroll(0, 0);

    }
    return (
        <div className="container">
            <div className="header">
                <div classname="box">
                    <img className="movie__img"  alt="" style={{ width: "100%",backgroundSize: "cover",
                            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")`,
                            backgroundPosition: "center center",  height: "500px", }} />
                    <PlayArrowIcon className="play_btn" onClick={() => handleVideoStream(movie.id)} style={{ fontSize: "150px" }} />
                </div>
                <h1 className="title">{movie.original_title}</h1>
                <div className="movie__overview">
                    <div className="movie__heading">
                        <h4 style={{ marginTop: "20px" }}>Rating</h4>
                        <div className="movie__rating" style={{ marginTop: "20px", marginLeft: "5px" }}>
                            <StarIcon classname="star" style={{ margin: "1px 5px", fontSize: "36px",fill:"#FDCC0D" }} />
                            <h2>{movie.vote_average}<span>/ 10</span></h2>
                        </div>

                    </div>
                    <div className="movie__genres">
                        <h5>Genres</h5>
                        {genres && genres.map(genre => (
                            <>
                                <Chip label={genre.name} style={{ margin: "10px 8px", background: "none", padding: "8px 8px", borderStyle: "solid", color: "white" }} />
                            </>
                        ))}
                    </div>
                    <h4 >Overview</h4>
                    <h5 style={{ marginBottom: "50px", marginTop: "30px", marginLeft: "10px" }}>{movie.overview}</h5>


                </div>
            </div>
            <div className="movies__info">
                <div>
                    <h4>Release Date</h4>
                    <h5 className="release__date">{movie.release_date}</h5>

                </div>
                <div >
                    <h4>Runtime</h4>
                    <h5 className="runtime">{movie.runtime}</h5>
                </div>
                <div>
                    <h4>Budget</h4>
                    <h5 className="budget">{movie.revenue}</h5>

                </div>
            </div>
            <div classname="casts__info" style={{ marginTop: "10px", marginBottom: "40px" }}>
                {casts.length >= 1 && <> <h4 style={{ marginBottom: "20px" }}>Top Billed Casts</h4>
                    <div className="body">
                        {casts.length !== 0 && casts.slice(0, 8).map(cast => (
                            <div className="casts__container">
                                <img className="casts__image" src={cast.profile_path !== null ? base_url + cast.profile_path : imageNotFound} style={{ borderRadius: "10px" }} alt="" />
                                <h3 className="casts__name">{cast.name}</h3>
                            </div>
                        ))}
                    </div></>}
            </div>

            {simMovies.length > 1 && <>
                <h4 style={{ marginBottom: "20px" }}>Similar Contents</h4>
                <div className="similar__movies">
                    {simMovies && simMovies.map(simMovie => (
                        <>
                            <div className="xyz" onClick={() => handleSimMovieClick(simMovie.id)} >
                                <img className="simMovie__img" style={{ borderRadius: "10px" }} src={simMovie.poster_path !== null ? base_url + simMovie.poster_path : imageNotFound} alt="" />
                                <h3 className="simMovie__title">{truncate(simMovie.original_title, 12)}</h3>
                            </div>
                        </>
                    ))}
                </div>
            </>}

        </div >
    );
}

export default Overview;