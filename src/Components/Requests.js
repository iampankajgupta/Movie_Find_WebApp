import axios from './axios'
export const APIKEY = `${process.env.REACT_APP_API_KEY}`
const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchHorrorMovies: `discover/movie?api_key=${APIKEY}&with_genres=27`,

    fetchComedyMovies: `discover/movie?api_key=${APIKEY}&with_genres=35`,

    fetchActionMovies: `discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchRomanceMovies: `discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${APIKEY}&with_genres=99`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    base_url: `https://image.tmdb.org/t/p/original/`,

    // fetchPopularTvSeries: `/tv/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=2`

}

export const fetchVideoStream = (movie_id) => {

    async function fetchVideo() {
        const request = await axios.get(`/movie/${movie_id}/videos?api_key=${APIKEY}&language=en-US`);
        let key = request.data.results[0]?.key;
        window.open(`https://www.youtube.com/watch?v=${key}`);
    }

    fetchVideo()

}


export default requests;
