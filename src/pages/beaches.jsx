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
import Navbarr from "../components/navbar";
import { BeachData } from "../data/beach";

export default function Beaches() {
  let beaches = BeachData();
  return (
    <div>
      <Navbarr />
      <Container fluid>
        <Row className="hotels">
          <Col>
            <div>
              <h2>Beaches</h2>
            </div>
          </Col>
        </Row>

        <Row className="all-locations">
          <h1>Discover the best Beaches in the city</h1>

          {beaches.map((beach, i) => (
            <Col xs={12} md={4}>
              <div className="locations">
                <Link to="" key={i}>
                  <img src={beach.image}></img>
                  {beach.HotelName}
                  <div className='icons'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
