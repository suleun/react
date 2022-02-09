import React, { useState } from "react";
import Movie from './components/Movie';
import MovieForm from './components/MovieForm'


function App() {

  const[movies, setMovies] = useState([
    {title : 'sosoeueun', year:2021},
    {title : 'sosoeueun1', year:2022},
    {title : 'sosoeueun2', year:2023},
  ])

  const renderMovies = movies.map(movie =>{
    return (
     <Movie movie={movie}  key={movie.title}/>
     
    );
  })

  const addMovie = (movie) => {
    
    setMovies([
      ...movies,
      {
       movie
      }
    ])
  }

  return (
    <div className="App">
      <h1>Movie list</h1>

      <MovieForm addMovie={addMovie}/>
    
    {renderMovies}
      
    </div>
  );
}



export default App;
