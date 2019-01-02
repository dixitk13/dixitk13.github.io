import React from "react";
import { rhythm } from "../../utils/typography";
import styled from "styled-components";
import dixitk13 from "./dixitk13.jpg";
import Logos from "../Logos";

const AboutMeContainer = styled.div`
  border: 1px solid #ef9a9a;
  height: 90vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
  padding: ${rhythm(0.5)};
  border-radius: ${rhythm(0.5)};
`;

const Name = styled.h1`
  color: rgba(0, 0, 0, 0.65);
  font-size: ${rhythm(1.5)};
  margin: 0 0 ${rhythm(0.5)} 0;
`;

const Footer = styled.div`
  justify-self: flex-end;
  color: #666;
  margin-top: auto;
  text-decoration: none;
`;

const AboutMeView = () => {
  return (
    <AboutMeContainer>
      <Name>Dixit Keshavbhai Patel</Name>
      <img src={dixitk13} alt="Dixit" />
      <blockquote>just another software engineer</blockquote>
      <Logos />
      <Footer>
        Made with ❤ using <a href="https://www.gatsbyjs.org/">Gatsby</a> and{" "}
        <a href="https://www.styled-components.com/">Styled Components</a>
      </Footer>
    </AboutMeContainer>
  );
};

export default AboutMeView;
