import React from "react";
import * as Card from "../../common/Card";

export default ({ title, link, tags, body }) => {
  return (
    <Card.Container>
      <Card.Header>{title}</Card.Header>
      <Card.Description>
        <blockquote>{body}</blockquote>
      </Card.Description>
    </Card.Container>
  );
};
