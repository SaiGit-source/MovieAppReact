import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'

// import components -> note if i said 'export function MovieCard({movie})' then i got to say 'import {MovieCard} from './components/MovieCard'' -> named export as opposed to default export

// this is a component that means, any function in Javascript that returns some kind of JSX code
// it starts with Uppercase letter
// it returns only one root / parent element (one <div> element that it is returning)
// what if we have another <div> in that case, we return a fragment. empty html tag <></>

// now for the Movie project, what kind of components i need -> image, name of the movie, release date, whether favorite or not 

// <Home></Home> component to dynamically render movies
// <Route path="/" element={<Home></Home>}></Route> ->  default path is "/" and maps to Home component

import {Routes, Route} from "react-router-dom"
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'
//wrap everything in MovieProvider so state is available globally using the context

function App() {

  return (
    <>
    <MovieProvider>
      
      <NavBar></NavBar>
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favorites" element={<Favorites></Favorites>}></Route>
        </Routes>
      </main>
      </MovieProvider>
    </>
  )
}
// i am passing-in display props into PropsText component


// Conditional rendering: we may want to display first movie if movieNumber=1 or second if movieNumber=2

/*
    const movieNumber=1;
      {movieNumber === 1 ? (<MovieCard movie={{title: "Tim's film", release_date: "2024"}}></MovieCard>
      ) : (
      <MovieCard movie={{title: "Joe's film", release_date: "2022"}}></MovieCard>
      )}

      or

      <movieNumber === 1 && <MovieCard movie={{title: "Joe's film", release_date: "2022"}}></MovieCard>
*/

// instead of writing two or multiple divs inside empty html tags, we use reusuable components
function ReusuableText(){ // we define with capital letter
  return (
    <div>
    <p>Hi I am reusuable compoenent!</p>
  </div>

  )
}

// lets say we want to change the color or the way the component looks then we need 'Props' {}, now i can pass this {text} keyword into my component and i can dynamically use the value passed-in
function PropsText({text}){ // we define with capital letter
  return (
    <div>
    <p>{text}</p>
  </div>

  )
}


export default App
