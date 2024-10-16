import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Avinash Agrawal </span>
            from <span className="purple"> Satna, MP, India.</span>
            <br /> I am a final year student pursuing Bachelor of Technology in Computer Science stream '25.
            <br />
            <span className="purple">• Won National Level Hackathon, SprintHacks 2k23</span>, organized by GDSC KIET, Ghaziabad.
            <br />
            <span className="purple">• CodeForces: Maximum Rating – 1696 |Expert</span>| India Rank 863 | Global Rank 9330
            <br />
            <span className="purple">• CodeChef: Maximum Rating – 2018 | 5 Star</span> | India Rank 1155 | Global Rank 1816
            <br />
            <span className="purple">• LeetCode: Maximum Rating – 2055 |Knight</span>| Top 2.06% | Global Rank 11939
            <br />
            • Achieved Global Rank <span className="purple">29, 57, 71 & 125</span> in CodeChef Starters 150, 130, 143 & 154 (Div. 2) respectively.
            <br />
            • Secured Global Rank <span className="purple">456 & 469</span> in CodeForces Round 951 (Div. 2) & CodeForces Round 962 (Div. 3) respectively.
            <br />
            • Secured India Rank <span className="purple">76, 154, 173</span> & Global Rank 480, 629, 674 in LeetCode Biweekly 128, 130, 140 respectively.
            <br />
            • Successfully solved over <span className="purple">2000 DSA/CP Problems</span> across platforms such as LeetCode, CodeChef, GFG | Other

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hope For Best Prepare For Worst!"{" "}
          </p>
          <footer className="blockquote-footer">Maya Angelou</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
