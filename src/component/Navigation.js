import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button, Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
  const navHide = () => {
    const moNav = document.querySelector('.navigation')
    const btnHide = document.querySelector('.btnClose')
    const btnOpen = document.querySelector('.btnMoNav')
    btnOpen.classList.remove('hide')
    moNav.classList.remove('active')
    btnHide.classList.remove('active')
    document.querySelector('body').classList.remove('active')
}
  return (
    <div className='navigation'>
       <button className='btnClose' onClick={navHide}><img src={require('../asset/btn_close.png')} alt="닫기" /></button>
        <Navbar data-bs-theme="white">
        <Container>
            <Nav className="me-auto">
                <Nav.Link href="/" className='logo'>LOGO</Nav.Link>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/trend/all">트렌드</Nav.Link>
                <Nav.Link href="/trend/popular">영화</Nav.Link>
                <Nav.Link href="/trend/tv">TV 프로그램</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    </div>
  )
}

export default Navigation