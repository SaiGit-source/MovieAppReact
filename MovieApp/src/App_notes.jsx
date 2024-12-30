import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// this is a component that means, any function in Javascript that returns some kind of JSX code
// it starts with Uppercase letter
// it returns only one root / parent element (one <div> element that it is returning)
// what if we have another <div> in that case, we return a fragment. empty html tag <></>
function App() {

  return (
    <>
      <ReusuableText></ReusuableText> 
      <PropsText text={"Hi I am props"}></PropsText>

    </>
  )
}
// i am passing-in display props into PropsText component


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
