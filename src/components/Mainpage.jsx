import React from 'react'
import { Row, Col, Container, 
    Form, FormControl, Button,
    Carousel,

} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Mainpage() {
  return (
    <div>
      <Container fluid>
        <Row>
          <header>
            <Col className="col1">
              <div className="header">
                <div className="tagline">
                  <h2>Discover The City</h2>
                  <button>Add a bucket list</button>
                </div>
              </div>
            </Col>
          </header>
        </Row>

        <Row className="about">
          <h1>About Us</h1>
          <Col sm={8}>
            <div className="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temporincididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>

          <Col sm={4}>
            <div className="about-image">
              <img src="../images/picnic.jpg"></img>
            </div>
          </Col>
        </Row>

        <Row className="all-locations">
          <h1>Discover the best in the city</h1>

          <Col xs={12} md={4}>
            <div className="locations">
              <Link to="">
                <img src="../images/cinema.jpg"></img>
                Cinemas
              </Link>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="locations">
              <Link to="">
                <img src="../images/active.jpg"></img>
                Adventure
              </Link>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="locations">
              <Link to="">
                <img src="../images/beach.jpg"></img>
                Beach
              </Link>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="locations">
              <Link to="">
                <img src="../images/hotel.jpg"></img>
                Hotels
              </Link>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="locations">
              <Link to="">
                <img src="../images/res.jpg"></img>
                Restaurant
              </Link>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="locations">
              <Link to="">
                <img src="../images/Mall.jpg"></img>
                Mall
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="subscribe">
          <Col className="forms">
            <Form className="d-flex">
              <h3>Subscribe</h3>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 bg-transparent text-white"
                aria-label="Search"
              />
              <Button variant="outline-success bg-white">Search</Button>
            </Form>
          </Col>
        </Row>

        <Row className="all-locations">
          <h1>Popular Places</h1>

          <Col xs={12} md={4}>
            <div className="locations">
              <Link to="">
                <img src="../images/cinema.jpg"></img>
                Cinemas
              </Link>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="locations">
              <Link to="">
                <img src="../images/active.jpg"></img>
                Adventure
              </Link>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="locations">
              <Link to="">
                <img src="../images/beach.jpg"></img>
                Beach
              </Link>
            </div>
          </Col>
          <div className="btns">
            <Button size="sm">View More</Button>
          </div>
        </Row>

        <Row className="testimonials">
          <h2>Testimonials</h2>
          <Col>
            <Carousel variant="dark">
              <Carousel.Item className="carousel-item">
                {/* <img
                  className="carousels-item"
                  src="../images/beach.jpg"
                  alt="First slide"
                /> */}
                <Carousel.Caption>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod temporincididunt ut labore et dolore magna
                    .
                  </p>
                  <h5>Derek</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                {/* <img
                  className="carousels-item"
                  src="../images/beach.jpg"
                  alt="Second slide"
                /> */}
                <Carousel.Caption>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod temporincididunt ut labore et dolore magna
                   .
                  </p>
                  <h5>Alberta</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                {/* <img
                  className="carousels-item"
                  src="../images/beach.jpg"
                  alt="Third slide"
                /> */}
                <Carousel.Caption>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod temporincididunt ut labore et dolore magna
                    .
                  </p>
                  <h5>Racheal</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>



        <Row className='events'>
            <Col>
            <div>
                <h2>UPCOMING EVENTS</h2>
                <h4>Vodafone Ghana Music Awards (VGMA)</h4>
            </div>
            <div className="btns">
            <Button size="sm">But Tickets</Button>
          </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
}
