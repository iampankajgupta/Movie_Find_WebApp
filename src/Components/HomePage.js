import React from 'react';
import requests from './Requests'
import Row from './Row';
import Banner from './Banner';

import "./HomePage.css"
const HomePage = () => {
    return (
        <>
            <Banner />
            <div className="show__all" style={{margin:"auto",width:"50%",marginTop:"10px"}}>
                <h4 className="show__all__text" style={{ textAlign:"center"}} onClick={()=>window.location.href="http://localhost:3000/search"}>Show All Movies</h4>
            </div>
            <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} isLargeRow  />
            <Row title="Horror Movies" id="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Comedy Movies" id="Comedy" fetchUrl={requests.fetchComedyMovies} />
            {/* <Row title="TV Series" id="tv__series" fetchUrl={requests.fetchPopularTvSeries} /> */}
            <Row title="Action  Movies" id="Action" fetchUrl={requests.fetchActionMovies} />
            <Row title="Romance" id="Romance" fetchUrl={requests.fetchRomanceMovies} />
        </>
    );
}

export default HomePage;