import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.style.css";
import Profile from "../../assets/img/profile/profile.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">A propos de moi</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hello! je suis <strong>&nbsp;Malika BOUKRA</strong>
                <br />Après un parcours en psychologie scolaire et une expérience
                en tant qu’employée commercial. 
                <br />J’ai entrepris une reconversion
                vers le métier de développeur web et je suis actuellement en 
                formaion avec SocialBuilder.
                <br /> Je suis actuellement à la recherche 
                d’un stage afin de mettre en pratique l’ensemble des compétences 
                acquises et les approfondir.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                      Me-Contacter
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href='/../public/CV_Malika_BOUKRA (1).pdf/' target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        Mon parcours
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Boukramalika" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/malika-boukra-b27a83205/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
