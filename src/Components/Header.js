import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div >
        <Navbar className="bg-body-tertiar  ">
        <Container>
          <Navbar.Brand >
           <Link to={"/"}>
              <img
                alt=""
                src="https://i.postimg.cc/43hdj4RM/Flat-design-restaurant-logo-on-transparent-background-PNG.png"
                width="80"
                height="65"
                className="d-inline-block align-top "
              />
               </Link>
             <b className='ms-1 mt-4 fs-1 text-black'>-Mellow Mushroom-   
             </b>
             <Link to={"/"}>
             <img
                alt=""
                src="https://i.postimg.cc/43hdj4RM/Flat-design-restaurant-logo-on-transparent-background-PNG.png" 
                width="80"
                height="65"
                className="d-inline-block align-top"
              /> 
          
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <hr />
    </div>
  )
}

export default Header