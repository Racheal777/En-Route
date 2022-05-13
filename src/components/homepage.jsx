import React from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormControl,
  Button,
  Carousel,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="home">
      {/* <Container> */}
        <Row >
          <Col className="top-btnss">
            <div>
              <Link to="/">
                <h2>En Route</h2>
              </Link>
              </div>
              <div>
              <button>
                <Link to="/">Login</Link>
              </button>
            
              </div>
             
          </Col>
        </Row>

    <div className="bg-image">


        <Row >
          <Col>
            <div>
              <h2>Explore</h2>
            </div>

            <div>
              <h1>GHANA</h1>
            </div>
          </Col>
          </Row>
<Row>
          <Col >
          <div className="mid-sect" >
              <div>
              <p>
              en-Route provides you with maximum resources to help navigate your
              way around in the city and allow you create memories
            </p>
              </div>
            <div>
            <img src="../images/main2.png" alt="picture"></img>
            </div>
            </div>
            </Col>
          <div>
         
            <button>
              <Link to="/index">Get Started</Link>
            </button>
          </div>
        </Row>
        </div>
      {/* </Container> */}
    </div>
  );
}
