
import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_ReactElsy from "../../assets/img/projects/React_Elsy.PNG";
import DB_movie from "../../assets/img/projects/moviedb.PNG";
import MARVEL from "../../assets/img/projects/Marvel.PNG";
import p_groupe from "../../assets/img/projects/projet-groupe.PNG";
import L_RockPaperScissors from "../../assets/img/projects/Rock_Paper_Scissors.PNG";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
//import L_EXPRESS from "../../assets/img/skills/express.svg";
//import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import FIRE_BASE from "../../assets/img/skills/firebase.png";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";




import "./project-timeline.style.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJETS</h1>
      <Timeline>
        <Events>
          {/* Project: projet de groupe*/}
          <ImageEvent
            date="10/08/2021"
            className="text-center"
            text="TMDB"
            src={p_groupe}
            alt="TMDB"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detail de projet
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>Ce projet a etait realisé en groupe, pendant notre formation
                        il consiste a reproduire certains fonctionnalités de sit TMDB (https://www.themoviedb.org/?language=fr-FR).
                        <hr />
                        <strong>Fonctionnalité:</strong>
                        <ul className="list-styles pt-1">
                          <li>Rechercher des films </li>
                          <li>Affichage de detail sur des films et acteurs</li>
                          <li>Site responsive </li>
                        </ul>
                        <hr />
                        <strong>Technologies utilisés:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="Javascript"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://boukramalika.github.io/Projet-de-groupe-tmdb/"
                  target="_blank"
                >
                  VOIR EN LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Boukramalika/Projet-de-groupe-tmdb"
                  target="_blank"
                >
                  CODE SOURCE
                </UrlButton>

              </div>
            </div>
          </ImageEvent>
          {/* Project: ELSY */}
          <ImageEvent
            date="07/06/2021"
            className="text-center"
            text="React Elsy"
            src={L_ReactElsy}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detail de projet
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> J'ai crée un petit outil qui nous aidera à savoir quelle quantité d'eau il faut boire par jour, en fonction de la température, du rythme cardiaque et du nombre de pas faits par l'utilisateur
                        <hr />
                        <strong>Fonctionnalité:</strong>
                        <ul className="list-styles pt-1">
                          <li>Realisé avec  React</li>
                          <li>Aplication responsive</li>
                        </ul>
                        <hr />
                        <strong>Technologies utilisés:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node-js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node
                            </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://elssy.herokuapp.com/"
                  target="_blank"
                >
                  VOIR EN LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Boukramalika/elsy"
                  target="_blank"
                >
                  CODE SOURCE
                </UrlButton>

              </div>
            </div>
          </ImageEvent>


          {/* Project: movie_data with react */}
          <ImageEvent
            date="16/07/2021"
            className="text-center"
            text="movie_data with react"
            src={DB_movie}
            alt="movie_data with react"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detail de projet
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>C'est une application qui permet
                        de rechercher un film et d'avaoir un ensemble de detail
                        en utilisant l'API dbmovie .
                        <hr />
                        <strong>Fonctionnalité:</strong>
                        <ul className="list-styles pt-1">
                          <li>entrer le film que vous voulez</li>
                          <li>grace a l'API qu'on peut recevoir la liste des resultats</li>
                          <li>c'est une aplication responsive</li>
                        </ul>
                        <hr />
                        <strong>Technologies utilisés:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://data-movie.herokuapp.com/"
                  target="_blank"
                >
                  VOIR EN LIVE
                </UrlButton>

                <UrlButton
                  href="https://github.com/Boukramalika/data-movie-react"
                  target="_blank"
                >
                  CODE SOURCE
                </UrlButton>

              </div>
            </div>
          </ImageEvent>



          {/* Project: marvel*/}
          <ImageEvent
            date="10/08/2021"
            className="text-center"
            text="Marvel-React-Firebase"
            src={MARVEL}
            alt="marvel"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detail de projet
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> C'est une application où l'utilisateur
                        peut s'inscrire et se connecter  via firebase
                        <hr />
                        <strong>Fonctionnalité:</strong>
                        <ul className="list-styles pt-1">
                          <li>les informationde l'utilisateur seront stocker dans une base de donner</li>
                          <li>Aplication responsive</li>
                        </ul>
                        <hr />
                        <strong>Technologies utilisés:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node-js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={FIRE_BASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://marvel-by-malika.herokuapp.com/"
                  target="_blank"
                >
                  VOIR EN LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Boukramalika/marvel-authentication-with-firebase"
                  target="_blank"
                >
                  CODE SOURCE
                </UrlButton>

              </div>
            </div>
          </ImageEvent>



          {/* L_Rock_Paper_Scissors */}

          <ImageEvent
            date="18/06/2021"
            className="text-center"
            text="Chifoumi - react"
            src={L_RockPaperScissors}
            alt="chifoumi "
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      Detail de projet
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>c'est une application
                        permet de reproduire le jeux de pierre,papier, ciseaux
                        .
                        <hr />
                        <strong>Fonctionnalité:</strong>
                        <ul className="list-styles pt-1">
                          <li>c'est un jeux </li>
                          <li>Application responsive </li>
                        </ul>
                        <hr />
                        <strong>Technologies utilisés:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>

                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://chifoumi-by-malika.herokuapp.com/"
                  target="_blank"
                >
                  VOIR EN LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/Boukramalika/pierre-feuille-ciseaux"
                  target="_blank"
                >
                  CODE SOURCE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

        </Events>


      </Timeline>
    </div>
  );
};

export default TimeLine;