import React from "react";
import styled from "styled-components";
import Logos from "../Logos";
import { device } from "../../../utils";

const FlatViewMain = styled.main`
  display: flex;
  flex-direction: row;
  padding: 20px;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const DetailSection = styled.section`
  columns: 2;
  flex: 2 1 60%;
  h1 {
    column-span: all;
  }
`;

const AsideDetails = styled.aside`
  flex: 1 1 30%;
  margin-top: 70px;
  div {
    align-items: center;
  }
`;

export const FlatView = () => {
  return (
    <FlatViewMain>
      <DetailSection>
        <h1>Yello, I am Dixit</h1>
        <p>
          I am a software engineer currently in Greater Seattle Area working
          with Oracle. Prior to this I've worked with companies like Cisco
          Systems @ San Jose - CA, Genesys Telecommunications @ Burlington - MA
          and Infosys Ltd. @ Pune - India.
        </p>
        <p>
          I have a Masters in Computer Science from Northeastern University @
          Boston - MA, and a Bachelor of Engineering in Computer Engineering @
          University of Mumbai, India.
        </p>
      </DetailSection>
      <AsideDetails>
        <Logos enableLayout />
      </AsideDetails>
    </FlatViewMain>
  );
};
