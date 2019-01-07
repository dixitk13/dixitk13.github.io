import React from "react";
import * as Card from "../../../common/Card";
import * as ECard from "../../../common/ExpandableCard";

export default ({ title, link, tags, body, html, toggleOpen, open }) => {
  return (
    <ECard.ExpandableCardContainer>
      <Card.HeaderContainer>
        <Card.Header open={open} onClick={toggleOpen}>
          {title}
        </Card.Header>
        <Card.OpenLink href={link}>↗</Card.OpenLink>
      </Card.HeaderContainer>

      {/*<Card.Description*/}
      {/*open={open}*/}
      {/*dangerouslySetInnerHTML={{ __html: html }}*/}
      {/*/>*/}

      {/*<Card.Description open={!open}>{body}</Card.Description>*/}

      <Card.Tags>
        {tags.map((tag, i) => (
          <Card.Tag key={`card-tag-${i}-${tag}`}>{tag}</Card.Tag>
        ))}
      </Card.Tags>
    </ECard.ExpandableCardContainer>
  );
};
