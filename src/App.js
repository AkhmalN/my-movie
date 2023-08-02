import { React, useEffect, useState } from "react"
import SearchIcon from './assets/loupe.png'
import HeaderIcon from './assets/Movie.png'
import './app.css'
import Card from "./MovieCard"
import Load from "./load"

const App = () => {
   const API_URL = 'https://www.omdbapi.com?apikey=90557500'


   const [movies, setMovies] = useState([])
   const [seacrhTerm, setSearchTerm] = useState('')



   const seacrhMovie = async (title) => {
      const responseAPi = await fetch(`${API_URL}&s=${title}`)
      const data = await responseAPi.json()

      setMovies(data.Search)
      console.log(data)
   }

   useEffect(() => {
      seacrhMovie('Batman')
   }, [])

   const hanldeOnChange = (event) => {
      setSearchTerm(event.target.value)
   }
   const hanldeOnSubmit = () => {
      seacrhMovie(seacrhTerm)
   }


   return (
      <div className="App" style={{display : 'flex', 
      flexDirection : 'column', 
      justifyContent : 'center', 
      alignItems : 'center'}}>
         <div className="header">
            <div className="header-title" style={{display : 'flex'}}>
               <img src={HeaderIcon} alt = {HeaderIcon} style = {{width : '80px', height : '70px'}}/>
               <h1>Mall Movie</h1>
            </div>
            <div className="header-input">
               <input
                  placeholder="Search for Movies"
                  value= {seacrhTerm}
                  onChange={hanldeOnChange}
               />
               <img
                  src={SearchIcon}
                  alt="Search"
                  onClick={hanldeOnSubmit}
               />
            </div>
         </div>
         <div className="searched">
            <div className="x"></div>
            <div className="search-term-field">Searching For {seacrhTerm}</div>
         </div>
         {movies?.length > 0 ? (
            <div className="container">
               {movies.map((movie, idx) => {
                  return(
                     
                     <Card key={idx} movie={ movie }/>
                  )
               })}
            </div>
         ) :
         (
            <Load/>
         ) 
         }
      </div>
   )
}


export default App