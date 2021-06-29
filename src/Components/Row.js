import React, { useState, useEffect } from 'react';
import axios from './axios'
import './Row.css'
import 'react-toastify/dist/ReactToastify.css';
import requests from './Requests';

// const base_url = "https://image.tmdb.org/t/p/original/";


const Row = ({ title, fetchUrl, isLargeRow, id }) => {

    const [movies, setMovies] = useState([]);

    const handleShowAll = (id) => {
        window.location.href = `http://localhost:3000/${id}`;
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData()

    }, [fetchUrl])

    // for handling the click image modal 
    const handleClick = (movie) => {
        window.location.href = `/${movie.id}/overview`
    }

    return (
        <div className='row'>
            <div className="row__title">
                <h2 className="genres__title">{title}</h2>
                <h3 className="show__all" id={id} onClick={() => handleShowAll(id)}>Show All</h3>
            </div>
            <div className='row__posters'>
                {movies.map(movie => (
                    <>
                        <img
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${requests.base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name} />
                    </>
                ))}
            </div>
    
        </div>
    );
}

export default Row;