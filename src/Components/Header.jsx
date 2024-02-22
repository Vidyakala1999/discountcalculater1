import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div >
         <Navbar className="bg-body-tertiary">
        <Container >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.pinimg.com/originals/7d/95/56/7d95564c160833d13873f91ef36eb39d.gif"
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{borderRadius:"5px"}}
            />{' '}
            <span style={{color:"rgb(45, 74, 107)",fontWeight:"bold"}}>Discount Calculator</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
