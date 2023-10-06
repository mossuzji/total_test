import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Button, Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <div className='navigation'>
        <Navbar data-bs-theme="white">
        <Container>
            <Nav className="me-auto">
                <Nav.Link href="/" className='logo'>LOGO</Nav.Link>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/trend">트렌드</Nav.Link>
                <Nav.Link href="/movies">영화</Nav.Link>
                <Nav.Link href="/tv">TV 프로그램</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    </div>
  )
}

export default Navigation