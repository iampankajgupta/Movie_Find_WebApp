import axios from './axios';
import React, { useState, useEffect } from 'react';
import requests, { fetchVideoStream } from './Requests';
import './Banner.css'
import Modal from 'react-modal'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { truncate } from './Helper'
import Carousel from 'react-bootstrap/Carousel'



Modal.setAppElement('#root')
const Banner = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const request = await axios.get(requests.fetchTrending);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, []);

    const handleClick = (movie) => {
        fetchVideoStream(movie.id);

        // console.log(movie.id);


    }
    return (
        <>
            <Carousel fade="true" slide="true" interval="3000">


                {movies.map((movie) => (
                    <Carousel.Item>
                        <header className="banner"
                            style={{
                                backgroundSize: "cover",
                                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                                backgroundPosition: "center center"
                            }}>
                            <div className="banner__contents">
                                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                                <div className="banner__buttons">
                                    <button className="banner__button" onClick={() => handleClick(movie)} >Watch Official Trailer</button>
                                    {/* <button className="banner__button" >MyList</button> */}
                                </div>
                                <h1 className="banner__description">
                                    {truncate(movie?.overview, 150)}
                                </h1>
                            </div>

                        </header>
                    </Carousel.Item>
                ))}

            </Carousel>

        </>
    );
}

export default Banner;