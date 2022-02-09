import React, { useEffect, useState } from "react";
import Movie from './components/Movie'

function App() {

  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const[movies, setMovies] = useState([
    {title : 'sosoeueun', year:2021},
    {title : 'sosoeueun1', year:2022},
    {title : 'sosoeueun2', year:2023}
  ])

  useEffect(()=>{
    console.log('render')
  })

  const renderMovies = movies.map(movie =>{
    return (
     <Movie movie={movie}  key={movie.title}/>
    );
  })

  const addMovie = (event) => {
    event.preventDefault();
    setMovies([
      ...movies,
      {
        title:movieTitle,
        year:movieYear
      }
    ])

    setMovieTitle('');
    setMovieYear('');
  }

  return (
    <div className="App">
      <h1>Movie list</h1>

      <form onSubmit={addMovie}> 
        <input type="text"
          value={movieTitle}
          placeholder="영화 제목"
          onChange={e => setMovieTitle(e.target.value)}
        />
        <br/>

        <input type="text"
          value={movieYear}
          placeholder="개봉년도"
          onChange={e => setMovieYear(e.target.value)}
        />
        <br/>

        <button type="submit">영화 추가</button>

      </form>
    
    {renderMovies}

      
    </div>
  );
}



export default App;
