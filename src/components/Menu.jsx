import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Navbar, Container, Nav, Image, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Menu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src="https://res.cloudinary.com/academia/image/upload/v1629987205/magher/logo_small_cny0cq.png"
              alt="logo"
              className="logo"
              thumbnail
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/Product">Productos</Link>
            </Nav>
            <Button variant="light" onClick={handleShow}>
              <FiShoppingCart></FiShoppingCart>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Menu;
