import React, { useState, useEffect } from 'react';
import './Search.css'
import axios from './axios';
import requests, { APIKEY } from './Requests';
import MovieCard from './MovieCard';
import { truncate } from './Helper'
import CustomPagination from './CustomPagination';
import { map } from './Helper'
import { Modal } from '@material-ui/core';
import Genres from './Genres'
import { useGenres } from './Helper';
// import Select from 'react-select';

const Search = ({ fetchUrl }) => {

    const [movies, setMovies] = useState([]);
    const [values, setValues] = useState("");

    const [numOfPages, setNumOfPages] = useState();

    const [page, setPage] = useState(1);

    const [rating, setRating] = useState(0);


    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [selectedGenres, setSelectedGenres] = useState([]);
    // const [genres, setGenres] = useState([]);

    const genreforURL = useGenres(selectedGenres);

    const [inputValues, setInputValues] = useState("");

    let current_movie_genre = window.location.href.split('/')[3];
    // get the genre of movie
    let genre = map.get(current_movie_genre);
    // console.log(current_movie_genre);


    let gen = window.location.href.split('/')[3];

    const fetchData = async () => {
        const requests = await axios.get(`/search/movie?api_key=${APIKEY}&language=en-US&page=1&include_adult=false&query=${values}&page=${page}&genre=${genre}`)
        setMovies(requests.data.results);
        setNumOfPages(requests.data.total_pages)
        return requests;

    }
    const fetchData1 = async () => {
        const request = await axios.get(genre + `&page=${page}`);
        setMovies(request.data.results);
        setNumOfPages(request.data.total_pages);
        return request;
    }


    const fetchAllMovies = async ()=>{

        const request = await axios.get(`/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
        setMovies(request.data.results);
        setNumOfPages(request.data.total_pages);
        return request;

    }

    const fetchSearchMovie = async ()=>{
        console.log('====================================');
        console.log("called");
        console.log('====================================');
        const requests = await axios.get(`/search/movie?api_key=${APIKEY}&language=en-US&page=1&include_adult=false&query=${values}&page=${page}`)
        setMovies(requests.data.results);
        setNumOfPages(requests.data.total_pages)
        return requests;
    }
    useEffect(() => {

        // async function fetchGenres() {
        //     const { data } = await axios.get(`/genre/movie/list?api_key=${APIKEY}`);
        //     setGenres(data.genres);
        // }
        // fetchGenres();


        // async function fetchGenreData() {
        //     const request = axios.get(`/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
        //     console.log(request.data);
        // }

        // fetchGenreData()

        // async function fetchData(){
        //     const requests = await axios.get(`/search/movie?api_key=${APIKEY}&language=en-US&page=1&include_adult=false&query=${values}&page=${page}&genre=${genre}`)
        //     setMovies(requests.data.results);
        //     setNumOfPages(requests.data.total_pages)
        //     return requests;

        // }
        if (values.length !== 0) {
            fetchData1();
        }
        else if(genre==='Comedy'||genre==='Action' || genre==='Romance' || genre==='Horror') {
            fetchData();
        }
    }, [values, page])


    useEffect(() => {
        if(gen==='search' && inputValues.length===0){
            fetchAllMovies(); 
        }else if(inputValues.length!==0){
            fetchSearchMovie();
        }

    },[inputValues,page]);

    // taking input from user 
    const getValues = (e) => {
        if(gen==='search'){
            setInputValues(e.target.value)
        }else{
            setValues(e.target.value)   
        }
    }

    const handleMovie = (id) => {
        window.location.href = `/${id}/overview`
    }
    return (
        <>
            <div className="header">

                <div className="header__container">
                    <input className="header__input" value={gen==='search'?inputValues:values} onChange={getValues} type="text" style={{ fontSize: "25px" }} placeholder="Search For Movies " />
                    <button className="search__btn" onClick={() => setModalIsOpen(true)} >Filter Movie</button>
                </div>

                {movies.map(movie => (

                    <>
                        {movie.vote_average > rating && <MovieCard
                            val={movie.id}
                            handleMovie={() => handleMovie(movie.id)}
                            id={movie.id} title={truncate(movie.title, 18)}
                            img={`${requests.base_url}${movie.poster_path}`}
                            stars={movie.vote_average}
                        />}
                    </>
                ))}
                {/* 


                {/* <Modal >
                    <h1>Filter Movie</h1>
                    <Genres
                        type="movie"
                        selectedGenres={selectedGenres}
                        setSelectedGenres={setSelectedGenres}
                        genres={genres}
                        setGenres={setGenres}
                        setPage={setPage} />

                </Modal> */}

                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            </div>
        </>
    );
}

export default Search;