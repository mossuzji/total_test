import React from 'react'

const MoNav = () => {
    const navActive = () => {
        const moNav = document.querySelector('.navigation')
        const btnHide = document.querySelector('.btnClose')
        const btnOpen = document.querySelector('.btnMoNav')
        btnOpen.classList.add('hide')
        moNav.classList.add('active')
        btnHide.classList.add('active')
        document.querySelector('body').classList.add('active')
    }
  return (
    <div className='mo-nav-area'>
        <button className="btnMoNav" onClick={navActive}><img src={require('../asset/btn_mo.png')} alt="메뉴" /></button>
       
    </div>
  )
}

export default MoNav