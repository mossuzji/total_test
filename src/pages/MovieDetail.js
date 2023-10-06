import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Video from '../component/Video';


const MovieDetail = () => {
  let [showDetail, setShowDetail] = useState({});
  const API_KEY = process.env.REACT_APP_API_KEY;
  let {id} = useParams();

  const detail = async() => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR`
    let response = await fetch(url);
    let data = await response.json();
    setShowDetail(data)
    console.log(data)
  }
 
  useEffect(() => {
    detail()
  }, [showDetail])


  return (
    <Container>
      <Link to ='/' className='btn_back'><img src={require('../asset/arrow_back.png')} alt="뒤로가기" /></Link>
      <Row className='detail-section'>
        <Col lg={6} className='detail-img-card'>
          <div
                className="detail-img"
                style={{
                  backgroundImage:
                    "url(" +
                    `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${showDetail?.poster_path}` +
                    ")",
                }}
              ></div>
        </Col>
        <Col lg={6} className="detail-info-ground">
          <div className="detail-info">
            <span className="detail-vote"><img src={require('../asset/star_filled_bk.png')} alt="평점"/>평균 평점 <span>{Math.floor(showDetail?.vote_average)}</span>/10</span>
            <div className="detail-adult">{showDetail?.adult?'19+':''}</div>
            <div className='util-area'>
              <div class="btn-area"><img src={require('../asset/btn_add.png')} alt="" /> <button>보고싶어요</button></div>
              <div class="btn-area"><img src={require('../asset/btn_edit.png')} alt="" /> <button>리뷰 작성</button></div>
              <div class="btn-area"><img src={require('../asset/btn_more.png')} alt="" /> <button>더보기</button></div>
            </div>
          </div>
          <div className="detail-title">{showDetail?.title}</div>
          <div className="detail-tagline">{showDetail?.tagline}</div>
          <div className="detail-overview">{showDetail?.overview}</div>
          <div className="detail-info2">
            <div>
              <span className='creadit'>개봉일</span>
              {showDetail?.release_date}
            </div>
            <div>
              <span className='creadit'>러닝타임</span>
              {showDetail?.runtime}분
            </div>
            <div className='product'>
              <span>제작사</span>
              {
                showDetail?.production_companies.map((company,idx)=>
                    <div>{company.name}</div>
                )
              }  
            </div>   
          </div>
          <>
            <Video/>
          </>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetail