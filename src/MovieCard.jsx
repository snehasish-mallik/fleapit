import React from 'react'

function MovieCard({ movie}){
    return(
        <div className='movie'>
          <div>
           <p>{movie.Year}</p>
          </div>

          <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster: 'https://via.placeholder.com/400'}/>
          </div>
          
          <div>
            <span> {movie.Type}</span>
            <h1>{movie.Title}</h1>
          </div>
        </div>
    )
}

export default MovieCard