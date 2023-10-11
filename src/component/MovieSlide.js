import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const MovieSlide = ({ movie }) => {
  //매개 변수에 부모에게 받을 데이터 저장소를 선언함
  console.log(movie)
  return (
    <div>
        <Carousel responsive={responsive}>
            {
              movie.results.map((item, idx) => (
                //item =임의의 값/ idx는 map의 키값
                <MovieCard key={idx} item={item} />
              ))
            }
            {console.log('무비슬라이드',movie)}
        </Carousel>
    </div>
  )
}

export default MovieSlide