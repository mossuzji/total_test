import React from 'react'
import { useSelector } from 'react-redux'
import { Badge } from 'react-bootstrap'

const Banner = ({ movie }) => {
  const {genreList} = useSelector(state => state.movie)
  return (
  <>
    <div className='banner' style={{
          backgroundImage: "url("+ `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${movie.poster_path}`+")"
      }}>
      </div>
      <div className="banner-info">
        <div className="genre">
          {movie.genre_ids.map((id, idx)=>
            <span className="badge" key={idx}>
              {genreList.find(movie=> movie.id==id).name}
            </span>
          )}
        </div>
        <div id="para_div">
          <h3>{movie.title}</h3>
          <div className="desc">{movie.overview}</div>
        </div>
        <div className="vote-average">
          평점 {Math.floor(movie.vote_average)}/10
        </div>
    </div>
  </>
  )
}

export default Banner