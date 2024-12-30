import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import './css/index.css'

/*
    <BrowserRouter>
    {" "}
    <App />
    </BrowserRouter>

    we put the App inside of BrowserRouter.. 
    it gives us the ability to change components rendering on screen based on "/" route we are going for our webpage
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {" "}
    <App />
    </BrowserRouter>
  </StrictMode>,
)
