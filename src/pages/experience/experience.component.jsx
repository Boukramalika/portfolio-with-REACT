import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Carrefour from "../../assets/img/experience/logo-carrefour-market.jpg";
import Creche from "../../assets/img/experience/creche.gif";
import Tilt from "react-tilt";
import "./experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={Carrefour} alt="Carrefour logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Employée Commercial</Card.Title>
                </div>
                <div>
                  <Card.Text className="">
                    <strong className="body-title-style ">Tâches réalisées :</strong>
                    <br />
                    <ul>
                      <li>Le travail en caisse</li>
                      <li>La gestion des stocks : Inventaire et étiquetage des produits</li>
                      <li>Le conseil et accueil de la clientèle</li>
                    </ul>
                    <br />
                    <strong>Duration:</strong> 22/11/2019 - 27/03/2021
                    <br/>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={Creche} alt="Creche logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Psychologue - Educatrice</Card.Title>
                </div>
                <div>
                  <Card.Text className="">
                    <strong className="body-title-style ">Tâches réalisées :</strong>
                    <br />
                    <ul>
                      <li>Gestions des enfants</li>
                      <li>Accompagnement et développement des enfants </li>
                      <li>Jeux ludiques</li>
                    </ul>
                    <br />
                    <strong>Duration:</strong> 04/10/2016 - 04/10/2017
                    <br/>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;