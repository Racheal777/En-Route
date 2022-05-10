import React, { useState } from "react";
import { getHotel } from "../data/hotels";
import { HotelData } from "../data/hotels";
import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Form,
  FormControl,
  Button,
  Carousel,
  Modal,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbarr from "../components/navbar";

export default function Hotel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //making use of the useParams feature in react by assigning it to a variable called params

  let params = useParams();

  //use params to get the id by changing it to an integer
  //params id come as a string thus it need to be changed to an integer with the use of parseInt
  //parseInt takes two argument which is the id and the base root
  let hotel = getHotel(parseInt(params.hotelId, 10));

  //grab all the hotels
  // let hotels = HotelData()
  return (
    <div>
      <Navbarr />
      <Container fluid>
        <Row className="hotels">
          <Col>
            <div>
              <h2>HOTELS</h2>
            </div>
          </Col>
        </Row>

        <Row className="one-location">
          <h2>Accra Hotels</h2>
          <Col sm={4}>
            <div>
              <img src={hotel.image}></img>
              <h3> {hotel.HotelName}</h3>
              <div className="icons">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </Col>

          <Col sm={6}>
            <h1>Details</h1>
            <div>
              <h2>Location: {hotel.Location}</h2>
              <h2>
                Website: <Link to="">{hotel.website}</Link>
              </h2>
            </div>
          </Col>
        </Row>
        <Row className="one-about">
          <Col>
            <h1>About</h1>
            <div>
              <p>{hotel.about}</p>
            </div>
          </Col>
        </Row>

        <Row className="middle-review">
          <Col>
            <div>
              <h2>{hotel.HotelName} Reviews </h2>
              <p>Share your thought with other friends</p>
            </div>
            {/* <div className="btn">
            <Button size="sm" variant="outline-primary">Write a Review</Button>
          </div> */}
         

        <Row>
          <Col>
            <>
              <Button variant="outline-primary" onClick={handleShow} className='btnss'>
                Write a Review
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Reviews</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Select aria-label="Default select example">
                      <option>Ratings</option>
                      <option value="1">1 star</option>
                      <option value="2">2 starts</option>
                      <option value="3">3 stars</option>
                      <option value="4">4 stars</option>
                      <option value="5">5 stars</option>
                    </Form.Select>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </Col>
        </Row>
        </Col>
        </Row>
      </Container>
    </div>
  );
}
