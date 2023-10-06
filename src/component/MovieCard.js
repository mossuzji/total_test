import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({item}) => {
    let navigate = useNavigate();
    const {genreList} = useSelector(state => state.movie)
  return (
    <div className='card-group'>
        <div
        className="card"
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w220_and_h330_face/${item?.poster_path}` +
            ")",
        }}
        onClick={()=> navigate(`/movies/${item.id}`)}
        >
            <div className="card-overlay">
                <div className="vote-group">
                    <span className="vote-average">{Math.floor(item.vote_average)}/10</span>
                </div>
            </div>
            {/* <div className="card-overlay">
                <h1>{item.title}</h1>
                <div className='genre'>
                    {
                        item.genre_ids.map((id,idx)=>
                        <Badge bg="black" key={idx}>
                            {genreList.find(item=>item.id==id).name}
                        </Badge>,
                        
                        )
                    }
                </div>
                <div className="vote-group">
                    <span className="vote-average">{item.vote_average}</span>
                    <span className="adult-info">{item.adult?"청불":"청소년 관람가"}</span>
                </div>
            </div> */}
        </div>
        <div className="card-info">
            <h4 onClick={()=> navigate(`/movies/${item.id}`)}>{item.title}</h4>
            <div className="token-wrap">
                <span className="date">{item.release_date}</span>
                <span className='lang'>&middot; {item.original_language}</span>
            </div>
            <div className='genre'>
                {
                    item.genre_ids.map((id,idx)=>
                    <Badge bg="dark" text="light" key={idx}>
                        {genreList.find(item=>item.id==id).name}
                    </Badge>,
                    )
                }
            </div>   
        </div>
    </div>
  )
}

export default MovieCard