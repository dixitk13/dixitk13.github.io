import React from "react";
import * as Card from "../../common/Card";

export default ({ title, link, tags, body }) => {
  return (
    <Card.Container>
      <Card.HeaderContainer>
        <Card.Header>{title}</Card.Header>
        <Card.OpenLink href={link}>⬀</Card.OpenLink>
      </Card.HeaderContainer>
      <Card.Description>{body}</Card.Description>
      <Card.Tags>
        {tags.map((tag, i) => (
          <Card.Tag key={`card-tag-${i}-${tag}`}>{tag}</Card.Tag>
        ))}
      </Card.Tags>
    </Card.Container>
  );
};
