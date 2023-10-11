import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Navigation from './component/Navigation';
import Sidebar from './component/Sidebar';
import MoNav from './component/MoNav';
import Footer from './component/Footer';
//1. 3개의 페이지 생성 - home/movie/movie-detail
//2. 홈페이지에서는 대표 배너를 볼 수 있다.
//3. 3가지 섹션의 영화를 볼 수 있다. (popular / top rated / upcoming)
//4. 각 영화에 마우스 오버시, 제목/장르/점수/인기도/관람등급 정보제공.
//5. 영화를 슬라이드로 넘기면서 볼 수 있다. 

function App() {
  return (
    <div className="App">
      <Navigation/>
      <MoNav/>
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/trend/:id' element= {<Movies />}/>
        <Route path='/movies/:id' element= {<MovieDetail/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
