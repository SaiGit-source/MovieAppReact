// this is to use state globally, context will make state available globally
// the reason is, we want to make state available to other pages as well such as Favorites page
// why? we want to persist favorites data even during page refresh

import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

// children is anything of the component that you render
// same like main.jsx => we put children=App inside <BrowserRouter>
export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    //localstorage allows us to store values inside browser
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]) // take previous values and add new movies 
    }

    const remFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie =>movie.id !== movieId)) // keep everything except incoming movieId
    }

    const isFavorite =(movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    // if we want all the 3 above functions to be available to children wrapped inside this context then provide value in the provider

    const value =  {
        favorites,
        addToFavorites,
        remFromFavorites,
        isFavorite
    }   

    // now all of them here can access values of this object 'value'

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}

