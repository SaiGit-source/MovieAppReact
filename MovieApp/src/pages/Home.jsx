// display list of movies
// we want to render movie list dynamically using movieCards

import MovieCard from "../components/MovieCard"
import '../css/Home.css'

import { useState, useEffect } from "react"

import { searchMovies, getPopularMovies } from "../services/api";

// State: how do we handle dynamic parts of our components and how do we maintain things like State. count of something or text of users typing in

// movies.map(movie => ) every single component i want to return for movies
// we need to provide the unique key to React can keep track of all the State updates to movies

// <form> that can take some inputs to search for movies -> <input type="text" will bring up a textbox

// const [searchQuery, setSearchQuery] = useState(""); // enter what default value of this state will be
// searchQuery is the state and setSearchQuery is the function to update the state
// whenever we update state, the entire component is going to re-render and update state
// onChange={(e) => setSearchQuery(e.target.value)} is used to update state from an input
// basically anytime we type something in input box, state variable is getting updated, state automatically updates the page
// e.preventDefault() prevents default behaviour and doesn't actually update the page
// we could also set state to default : setSearchQuery("-----------")
// we use conditional render to display only movies that match the searchQuery
/*
{movies.map(movie => (
            movie.title.toLowerCase().startsWith(searchQuery) && (
            <MovieCard movie={movie} key={movie.id}></MovieCard>)
        )
        )}
we use the state 'searchQuery' to conditionally render this movieCard */
// state could be compared to two-way binding in Angular

//  const movies = getPopularMovies(); everytime we reload the page it is going to pull movie list again and again but we dont want that   
// thats why we have something called as "useEffects"
// it will fetch all movies and display them only first time



function Home() {

    const [searchQuery, setSearchQuery] = useState(""); // enter what default value of this state will be
    // searchQuery is the state and setSearchQuery is the function to update the state
    // whenever we update state, the entire component is going to re-render and update state
    // onChange={(e) => setSearchQuery(e.target.value)} is used to update state from an input
    // basically anytime we type something in input box, state variable is getting updated, state automatically updates the page
    // e.preventDefault() prevents default behaviour and doesn't actually update the page
    // we could also set state to default : setSearchQuery("-----------")
    // we use conditional render to display only movies that match the searchQuery
    /*
    {movies.map(movie => (
                movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id}></MovieCard>)
            )
            )}
    we use the state 'searchQuery' to conditionally render this movieCard */
    // state could be compared to two-way binding in Angular
    // if we refresh state will be lost

    //     const movies = getPopularMovies();


    const [movies, setMovies] = useState([]); // enter what default value of this state will be
    // UseEffect *******************
    /*
    everytime we reload the page it is going to pull movie list again and again but we dont want that   
    // thats why we have something called as "useEffects"
    // it will fetch all movies and display them only first time
    */

    // Favorites button ****************
// Next to make favorite button work, we shouldn't reset state when we refresh application otherwise persist state
// how to store movie we marked as 'Favorite' permenantly -> we want to have state on multiple pages -> Prop Drilling -> passing states into multiple states
// 'context' makes the state globally available
// make a new folder context


    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // true because right when we load this component, we run the useEffect

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        };
        loadPopularMovies()
    }, []); // we re-render only if the (depenedncy) array[] has changed since last time otherwise we run it only once
    // this is common whenever we call an API

    // if we are loading loading ? <div className="loading">Loading.......</div> it will display Loading.... otherwise Movie grid
    // {error && <div className="error-message"></div>} same if there is an error it will show error

    const handleSearch = async (e) => {
        e.preventDefault(); 
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)

        try {
            const searchResults = await searchMovies(searchQuery) // it is talking to search API
            setMovies(searchResults)
            setError(null)
        }
        catch (err) {
            console.log(err)
            setError("Failed to search movies....")
        }
        finally {
            setLoading(false)
        }

        // setSearchQuery(""); // we reset searchInput textbox
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="Search for movies...." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                >
                </input>
                <button type="submit" className="search-button">Search movies</button>
            </form>
            {error && <div className="error-message">{error}</div>}
            {loading ? <div className="loading">Loading.......</div> : (
                    <div className="movies-grid">
                    {movies.map((movie) => (
                        //movie.title.toLowerCase().startsWith(searchQuery) && (
                        //<MovieCard movie={movie} key={movie.id}></MovieCard>)
                        <MovieCard movie={movie} key={movie.id}></MovieCard>
                    )
                    )}
                </div>
        )}   
    </div>
    )
}

// export component
export default Home