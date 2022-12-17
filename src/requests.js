const APIKEY = "7c431ce09f1818fb899003dd1b790616";
export const IMAGEBASEURL = "https://image.tmdb.org/t/p/original/";

export const requests = {
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_network=213`,
    fetchTrending:`/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchAction:`/discover/movie?api_key=${APIKEY}&with_geners=28`,
    fetchNowPlaying:`movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`,
    fetchUpComing:`/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`,
}