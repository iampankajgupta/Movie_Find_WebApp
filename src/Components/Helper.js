import requests from "./Requests";

export function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

export const opts = {
    height: "500px",
    width: "100%",
    playerVars: {
        autoplay: 1
    }
}


export const getGenre = ()=>{
    let genre = window.location.href.split('/')[3];
    if(genre==="comedy__movies"){
        return requests.fetchComedyMovies
    }
    else if (genre==="horror_movies"){
        return requests.fetchHorrorMovies;
    }
    else if(genre==="action__movies"){
        return requests.fetchActionMovies
    }

}
// custom hook of converting 1 2 3 4 to 1,2,3,4

export const useGenres = (selectedGenres)=>{
    if(selectedGenres.length<1) return "";

    const GenreIds = selectedGenres.map((g)=>g.id);
    return GenreIds.reduce((acc,curr)=>acc+','+curr)
}

export const map = new Map()
map.set("Comedy",requests.fetchComedyMovies)
map.set("Horror",requests.fetchHorrorMovies)
map.set("Action",requests.fetchActionMovies)
map.set("originals",requests.fetchTrending)
map.set("tv__series",requests.fetchPopularTvSeries)
map.set("Romance",requests.fetchRomanceMovies)