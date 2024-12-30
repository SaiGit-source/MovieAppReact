const API_KEY="21df659dcd9d0735414186585f7f1acf"
const BASE_URL="https://api.themoviedb.org/3"

export const getPopularMovies = async() => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json() // await because these are Async operations
    return data.results
};

export const searchMovies = async(query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json() // await because these are Async operations
    return data.results
};

