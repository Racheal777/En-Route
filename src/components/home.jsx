import React from "react";
 import "../styles/Home.css"
import { Row, Col, Container, 
  Form, FormControl, Button,
  Carousel,

} from 'react-bootstrap'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="main">
      <Container className="mains">
        <Row>
          <Col>
          <div className="logo">
          <h1>EN ROUTE</h1>
        </div>
         
          </Col>
        </Row>

        <Row>
          <Col sm={6}>

          <div className="text">
          <h2>
            A TOUR SITE FOR EASY <span>ACCESS IN THE CITY AND BEYOND</span>
          </h2>
          <h3>
            EN ROUTE provides you with maximum resources to help navigate your
            way around the city and allows you create memories
          </h3>

          <h3>
            EN ROUTE provides you with maximum resources to help navigate your
            way around the city and allows you create memories
          </h3>


        </div>
          </Col>

          <Col sm={6}>
          <div className="image">
            <img src="../images/main.jpg" alt="city picture"></img>
        </div>
          </Col>
        </Row>

        <Row>
          <Col>
          <div className="btn">
            <button className="start-btn"><Link to="/index">Get Started</Link></button>
            <button className="login-btn">Login</button>
        </div>
          </Col>
        </Row>
      </Container>
     
    </div>
  );
}
