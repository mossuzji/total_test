import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MovieAction } from '../redux/action/MovieAction';
import Loading from '../component/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Movies = () => {
  let navigate =useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const {popularMovies, loading, topRatedMovies, upcomingMovies, trendListAll, trendMovies, trendPrograms, genreList} = useSelector((state)=> state.movie)
  useEffect(()=> {
    dispatch(MovieAction.getMovies())
  },[])
  if(loading) {
    return (
      <Loading/>
    )
  }
  const MoviePages = [
    {id: 'all', secTit: '#전체 트렌드', list: trendListAll},
    {id: 'popular', secTit: '#지금 인기있는 영화', list: trendMovies},
    {id: 'tv', secTit: '#인기 프로그램', list:trendPrograms}
  ]
  const findPageSource = MoviePages.find((page) => page.id == params.id)
  console.log(findPageSource)
  return (
    <div className='movies'>
      <div className="backArea">
        <Link to ='/' className='btn_back'><img src={require('../asset/arrow_back.png')} alt="뒤로가기" /></Link>
      </div>
      <Container>
      <h2 className='secTit'>{findPageSource.secTit}</h2>
      <div className="card-area">
      {
      findPageSource.list.results.map((item, idx) => (
          <div className='card-group' key={idx}>
            <div
              className="card"
              style={{
                backgroundImage:
                  "url(" +
                  `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${item?.backdrop_path}` +
                  ")",
            }}
              onClick={()=> navigate(`/movies/${item.id}`)}>
              <div className="card-overlay">
                <div className="vote-group">
                    <span className="vote-average">{Math.floor(item.vote_average)}/10</span>
                </div>
              </div>  
            </div>
            {/* //card-groupe */}
            <div className='card-info'>
              <h4 onClick={()=> navigate(`/movies/${item.id}`)}>{item.title}{item.name}</h4>
            </div>
            <div className="token-wrap">
                <span className="date">{item.release_date}{item.first_air_date}</span>
                <span className='lang'>&middot; {item.original_language}</span>
            </div>
          </div>
        ))}
      </div>
      </Container>
    </div>
  )
}

export default Movies