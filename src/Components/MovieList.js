import React from 'react';


const movieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="d-flex justify-content-start m-3" >
                    <img className="image" style={{ height: "310px" }} src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="image" />
                </div>))}
        </>
    );
}

export default movieList;