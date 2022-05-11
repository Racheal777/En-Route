import React from "react";
 import "../styles/Home.css"
import { Row, Col, Container, 
  Form, FormControl, Button,
  Carousel,

} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Navbarr from './navbar'


export default function Home() {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
  

    <div className="main">
      {/* <Container fluid> */}
        <Row>
          <Col>
         
          <Carousel >
  <Carousel.Item className="carousels">
    <img
      className="carousel"
      src="../images/mall.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <div className="carousel-text">
      <div>
      <h1>FINALLY ITS TIME TO RELAX</h1>
      <p>Top rated Hotels, Restaurants, Beaches, Cinemas, etc</p>
      <div className="btn">
            <button className="start-btn"><Link to="/index">Get Started</Link></button>
           
       
     </div>
      </div>
        </div>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className="carousels">
    <img
      className="carosel"
      src="../images/mall.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    <div className="carousel-text">
      <div>
      <h1>START TO ENJOY UNIQUE PLACES</h1>
      <p>Top rated Hotels, Restaurants, Beaches, Cinemas, etc</p>
      <div className="btn">
            <button className="start-btn"><Link to="/index">Get Started</Link></button>
           
       
     </div>
      </div>
        </div>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item className="carousels">
    <img
      className="carousel"
      src="../images/beach.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <div className="carousel-text">
      <div>
      <h1>GREAT PLACES TO DISCOVER</h1>
      <p>Top rated Hotels, Restaurants, Beaches, Cinemas, etc</p>
      <div className="btn">
            <button className="start-btn"><Link to="/index">Get Started</Link></button>
            
     </div>
      </div>
        </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          
          </Col>
        </Row>
      {/* </Container> */}
     
    </div>
    </ThemeProvider>
  );
}
