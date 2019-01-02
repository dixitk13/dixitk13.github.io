import React from "react";
// import { Link } from "gatsby";
import styled from "styled-components";

import { rhythm } from "../../utils/typography";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`;

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`;

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`;

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
    </Description>
  </UserWrapper>
);

export default ({ children }) => <Container>{children}</Container>;
