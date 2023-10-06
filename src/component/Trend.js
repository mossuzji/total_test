import React from 'react'

const Trend = ({movie}) => {
  return (
    <div className='trend' style={{
        backgroundImage: "url("+ `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${movie.poster_path}`+")"
    }}>
    </div>
  )
}

export default Trend