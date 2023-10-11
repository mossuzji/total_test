import React from 'react'

const Sidebar = () => {
    const MoveToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
  return (
    <div className='sidebar'>
        <div className="searchArea">
            <p className="secTit">#검색</p>
            <input type="text" id="search" placeholder='#영화 #액션'/><button className="btn-search"><img src={require('../asset/btn_search.png')} alt="검색" /></button>
        </div>
        <button className="btn-onTop" onClick={MoveToTop}><img src={require('../asset/btn-up.png')} alt="위로가기" /></button>
    </div>
  )
}

export default Sidebar