import React, {useEffect} from 'react'
import Banner from '../component/Banner'
import { useDispatch, useSelector } from 'react-redux'
import { MovieAction } from '../redux/action/MovieAction'
import Loading from '../component/Loading'
import MovieSlide from '../component/MovieSlide'
import { Container } from 'react-bootstrap'
import Trend from '../component/Trend'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const {popularMovies, loading, topRatedMovies, upcomingMovies, trendListAll, trendMovies, trendPrograms} = useSelector((state)=> state.movie)
useEffect(() => {
    dispatch(MovieAction.getMovies())
}, [])
  if(loading) {
    return (
      <Loading/> 
    )
  }
//실시간 트렌드 페이지 간 연결
const MoviePages = [
  {id: 'all', title: '#전체', secTit: '#전체 트렌드', list: trendListAll, image:0},
  {id: 'popular', title: '#영화', secTit: '#지금 인기있는 영화', list: trendMovies, image: 1},
  {id: 'tv', title: '#TV 프로그램', secTit: '#인기 프로그램', list: trendPrograms, image:0}
]
  return (
    <div className='home'>
      <Container>
        <div className="mainVisual">
            <Banner movie = {topRatedMovies.results[0]}/>
            {/* {console.log(topRatedMovies)} */}
        </div>
        <h2>실시간 트렌드</h2>
        <div className="trend-wrap">
            {
              MoviePages.map(page => (
                <div key = {page.id}>
                  <Link to={`/trend/${page.id}`}>
                    <h3>{page.title}</h3>
                    <Trend movie= {page.list.results[page.image]}/>
                  </Link>
                </div>
              ))
            }
          {/* <div className="total">
            <h3>#전체</h3>
            <Link to ='/movies/all' movie={trendListAll.results}>
              <Trend movie ={trendListAll.results[0]}/>
            </Link>
          </div>
          <div className="movie">
            <h3>#영화</h3>
            <Link to ='/movies' movie={trendMovies.results}>
              <Trend  movie ={trendMovies.results[1]}/>
            </Link>
          </div>
          <div className="tv-program">
            <h3>#TV 프로그램</h3>
            <Link>
              <Trend  movie ={trendPrograms.results[1]}/>
            </Link>
          </div> */}
        </div>
        <div className='contents'>
            <h2>화제의 영화</h2>
            <MovieSlide movie={popularMovies}/>
            <h2>평균 별점이 높은 작품</h2>
            <MovieSlide movie= {topRatedMovies}/>
            <h2>개봉예정작</h2>
            <MovieSlide movie= {upcomingMovies}/>
        </div>
      </Container>
    </div>
  )
}

export default Home