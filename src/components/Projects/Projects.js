import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MediStop from "../../Assets/Projects/MediStop.png";
import Genius from "../../Assets/Projects/Genius.png";
import Analyzer from "../../Assets/Projects/analyzer.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Genius}
              isBlog={false}
              title="Genius.AI - Saas Platform"
              description="• Built a SaaS (Software as a Service) platform featuring five AI tools that generate images, videos, music, code and facilitate general conversation.
              • Integrated Gemini API for code generation & conversation and Replicate’s models to create various types of media
              • Implemented user authentication with Clerk, integrated Stripe for payment processing, and managed the MySQL database using Prisma ORM."
              ghLink="https://github.com/Avinash0308/AviX"
              demoLink="https://youtu.be/oM1PlYCPZS8"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Analyzer}
              isBlog={false}
              title="YouTube Analyzer - Chrome Extension"
              description="• Developed a Chrome Extension that empowers users to instantly analyse, summarize, and resolve queries related to YouTube videos with a single click;
              • Leveraged the Transformer’s mT5 Multilingual XLSum Model to analyse video using its Transcript.
              • Integrated Gemini API to resolve user queries related to YouTube Video using summarized text."
              ghLink="https://github.com/Avinash0308/Youtube-Analyzer"
              demoLink="https://youtu.be/SPqJzIG7zQA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MediStop}
              isBlog={false}
              title="MediStop - Full Stack Website"
              description="• Created MediStop, a health tech web app enabling users to securely store medical data, book doctor appointments, and access a curated list of health schemes from various organizations.
              • Integrated MongoDB as the database to authenticate user information & securely store medical data.
              • Built the backend using Node.js and developed the frontend with HTML, CSS, and JavaScript."
              ghLink="https://github.com/Avinash0308/MediStop_One_Stop_For_All_Medineed"
              demoLink="https://tumin-the-two-minute-app.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
