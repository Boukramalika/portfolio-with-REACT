import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from './pages/skills/skills.component';
import Experience from "./pages/experience/experience.component";
import ProjectTimeline from './components/projects-timeline/project-timeline.component.jsx';
import ContactForm from "./pages/contact-form/contact-form.component";
import FooterPanel from "./components/footer/footer.component";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import LoginPage from "./pages/LoginPage/LoginPage";

import "./App.css";


const App = () => {


  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
          <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> 
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <hr />
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      {/* skills section*/}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
      </div>
      {/*experience*/}
      <div>
        
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>

      </div>
      {/*projects section */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <ProjectTimeline />
          </Slide>
        </Container>
      </div>
      {/*CONTACT ME*/}
            {/*inscription */}
            <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            < LoginPage />

          </Slide>
        </Container>
      </div>

     
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <ContactForm />
          </Fade>
        </Container>

      </div>
      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
