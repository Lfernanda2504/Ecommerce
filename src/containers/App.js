import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Banner from '../components/Banner';
import CardWoman from "../components/CardWoman";
import CardMan from "../components/CardMan";




function App() {
  const [type, setType] = useState([]);

  const handleClick = (type) => {
    setType(type)
}
  return (
    <div className="App">
      <Banner />
      <Container className="my-3">
        <Row>
          <Col md={6} >
            <Container className="Woman" onClick={() => handleClick("Woman")}>
              <Image src="https://res.cloudinary.com/academia/image/upload/v1629997829/magher/mujer.jpg" className="img-woman" alt="woman" />
            </Container>
          </Col>
          <Col md={6} >
            <Container className="Man" onClick={() => handleClick("Man")}>
              <Image src="https://res.cloudinary.com/academia/image/upload/v1629998883/magher/hombre.jpg" className="img-man" alt="man" />
            </Container>
          </Col>
        </Row>
        {type === "Woman" ? <CardWoman /> : type ==="Man" ? <CardMan /> : console.log("no existe")}
      </Container>
    </div>
  );
}

export default App;




