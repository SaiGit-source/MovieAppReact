// display list of movies
// we want to render movie list dynamically using movieCards

import MovieCard from "../components/MovieCard"

import { useState } from "react"

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

    const movies =[
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1999"},
        {id: 3, title: "The Matrix", release_date: "1998"},
    ]

    const handleSearch = (e) => {
        e.preventDefault(); 
        alert(searchQuery);
        setSearchQuery("-----------");
    }

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
        <div className="movies-grid">
            {movies.map(movie => (
                movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id}></MovieCard>)
            )
            )}
        </div>
    </div>
    )
}

// export component
export default Home