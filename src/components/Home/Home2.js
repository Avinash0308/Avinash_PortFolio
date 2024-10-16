import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I am trying to learn something new everyday, I know... 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and CSS. </b>
              </i>
              <br />
              <br />
              My field of Interest's are exploring &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  AI/ML.
                </b>
              </i>
              <br />
              <br />
              My pure passion lies in the field of 
              <i>
                <b className="purple">
                  {" "}
                  Data Structure And Algorithms
                </b>
              </i>
              &nbsp; and enhancing my
              <i>
                <b className="purple">
                  {" "}
                  Competitive Programming Skills
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Avinash0308"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/avinash03082003"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/avinash-agrawal-397b0a206/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tulsi0308/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
              <a
                href="https://codeforces.com/profile/Avi0308"
                target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
              >
                <SiCodeforces />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.codechef.com/users/avi0308"
                target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
              >
                <SiCodechef />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/u/Avinash_Agrawal/"
                target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
              >
                <SiLeetcode />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://auth.geeksforgeeks.org/user/avinash004k9"
                target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
              >
                <SiGeeksforgeeks />
              </a>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
