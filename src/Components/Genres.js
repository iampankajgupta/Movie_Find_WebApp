import axios from './axios';
import React, { useEffect } from 'react';
import { APIKEY } from './Requests';
import Chip from '@material-ui/core/Chip';

const Genres = ({ selectedGenres, setSelectedGenres, genres, setGenres, type = "movie", setPage }) => {


    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);

        setGenres(genres.filter((g) => g.id !== genre.id))
        setPage(1)
    };


    
    const handleRemove = (genre) => {

        setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));

        setGenres([...genres, genre]);
        setPage(1)

    };




    useEffect(() => {
        async function fetchGenres() {
            const { data } = await axios.get(`/genre/${type}/list?api_key=${APIKEY}`);
            setGenres(data.genres);
        }
        fetchGenres();
    }, [])
    return (
        <div >

            {selectedGenres && selectedGenres.map((genre) => {
                return (
                    <Chip
                        label={genre.name}
                        style={{ margin: "10px 8px", background: "none", padding: "8px 8px", borderStyle: "solid", color: "white" }}
                        clickable
                        size="small"
                        color="primary"
                        style={{ margin: 2 }}
                        key={genre.id}
                        clickable
                        onDelete={() => handleRemove(genre)}

                    />
                )
            })}
            {genres && genres.map((genre) => {
                return (
                    <Chip
                        label={genre.name}
                        style={{ margin: "10px 8px", background: "none", padding: "8px 8px", borderStyle: "solid", color: "white" }}
                        clickable
                        onClick={() => handleAdd(genre)}

                    />
                )
            })}
        </div>


    );
}

export default Genres;