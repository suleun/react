import React from "react";
import Movie from './components/Movie'

function App() {

  const movies = [
    {title : 'sosoeueun', year:2021},
    {title : 'sosoeueun1', year:2022},
    {title : 'sosoeueun2', year:2023}
  ]

  const renderMovies = movies.map(movie =>{
    return (
     <Movie movie={movie}  key={movie.title}/>
    );
  })

  return (
    <div className="App">
      <h1>Movie list</h1>
    
    {renderMovies}

      
    </div>
  );
}



export default App;
