import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter, FiInstagram} from 'react-icons/fi'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer>
        <Container>
        <Row>
            <Col sm><div className="col-sm-6 col-md-4 footer-navigation">
            <h3>
              <a href="#">
              <Image src="https://res.cloudinary.com/academia/image/upload/v1629987205/magher/logo_small_cny0cq.png" alt="logo" className="logo" thumbnail />
              </a>
            </h3>
            <p className="links">
            <Link to="/">Inicio</Link>
            </p>
            <p className="links"><Link to="/Product">Productos</Link></p>
            <p className="company-name"> © 2021</p>
          </div></Col>
            <Col sm><div className="col-sm-6 col-md-4 footer-contacts">
            <div>
              <i className="fa fa-phone footer-contacts-icon"></i><FiPhone></FiPhone>
              <p className="footer-center-info email text-left">  +57  3165715140 </p>
            </div>
            <div>
              <i className="fa fa-envelope footer-contacts-icon"><FiMail></FiMail></i>
              <p>
                {" "}
                <a href="#" target="_blank">
                  luizafernandagarcia@gmail.com
                </a>
              </p>
            </div>
            <div>
              <span className="fa fa-map-marker footer-contacts-icon">< FiMapPin></FiMapPin></span>
              <p> 
                Colombia-Pereira
              </p>
            </div>
          </div>
          <div className="clearfix"></div></Col>
            <Col sm><div className="col-md-4 footer-about">
            <h4>Sobre la compañia</h4>
            <p>
              Empresa dedicada a la moda.
            </p>
            
          </div>
        </Col>
        </Row>
        <div className="social-links social-icons text-center">
              <a href="#">
              <FiInstagram></FiInstagram>
              </a>
              <a href="#">
                <FiTwitter></FiTwitter>
              </a>
              <a href="#">
                <FiLinkedin></FiLinkedin>
              </a>
              <a href="#">
                <FiGithub></FiGithub>
              </a>
            </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
