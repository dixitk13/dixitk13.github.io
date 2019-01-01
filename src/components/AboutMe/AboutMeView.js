import React from "react";
import styled from "styled-components";

const AboutMeContainer = styled.div`
  border: 1px solid #ef9a9a;
  border-radius: 4px;
  overflow: hidden;
  margin: 5px;
  height: 90vh;
  width: 20vw;
  display: flex;
  flex-direction: column;
`;

const AboutMeView = () => {
  return (
    <AboutMeContainer>
      <div>Name</div>
      <div>Image</div>
      <div>Footer</div>
    </AboutMeContainer>
  );
};

export default AboutMeView;
