import React from "react";

function App() {

  const movies = [
    {title : 'sosoeueun', year:2021},
    {title : 'sosoeueun1', year:2022},
    {title : 'sosoeueun2', year:2023}
  ]

  const renderMovies = movies.map(movie =>{
    return (
      <div className="movie" key={movie.title}>
        <div className="movie-title">{movie.title}</div>
        <div className="novie-year">{movie.year}</div>
      </div>
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
