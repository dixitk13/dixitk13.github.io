import React from "react";
import {
  Card,
  CardContainer,
  HeaderContainer,
  ViewMore,
  Body,
  Cross,
  Tags,
  Tag,
  Expander,
  ExpanderBody,
  ExpanderClose,
} from "../../../common/ExpandableCard";

import FannedCards from "../../../common/FannedCards";

export default ({
  id,
  title,
  link,
  tags,
  body,
  images,
  html,
  toggleOpen,
  open,
  active,
  index,
}) => {
  const onClickHandler = (e, href) => {
    e.stopPropagation();
    window.open(href);
  };

  const closeHandler = (e, id) => {
    e.stopPropagation();
    toggleOpen(id);
  };

  return (
    <Card active={active} index={index} open={open} cardId={id}>
      <CardContainer open={open}>
        <HeaderContainer
          index={index}
          open={open}
          cardId={id}
          onClick={() => toggleOpen(id)}
        >
          {title}
        </HeaderContainer>

        <FannedCards images={images} />

        <Body ariaLabel="Project Overview">{body}</Body>
      </CardContainer>
      <Expander cardId={id} open={open}>
        <ExpanderBody open={open} dangerouslySetInnerHTML={{ __html: html }} />
        <Tags open={open}>
          {tags.map((tag, i) => (
            <Tag key={`card-tag-${i}-${tag}`}>{tag}</Tag>
          ))}
          <ViewMore
            as="button"
            aria-label="View more details"
            target="_blank"
            referrer="noopener noreferrer"
            onClick={(e) => onClickHandler(e, link)}
          >
            View More ➡
          </ViewMore>
        </Tags>
        <ExpanderClose onClick={(e) => closeHandler(e, id)}>
          <Cross />
        </ExpanderClose>
      </Expander>
    </Card>
  );
};
