import React from "react";
import {
  Card,
  CardContainer,
  Title,
  HeaderContainer,
  OpenLink,
  Body,
  Footer,
  Tag,
  Expander,
  ExpanderBody,
  ExpanderClose
} from "../../../common/ExpandableCard";

export default ({
  id,
  title,
  link,
  tags,
  body,
  html,
  toggleOpen,
  open,
  active
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
    <Card active={active} open={open} onClick={() => toggleOpen(id)}>
      <CardContainer open={open}>
        <HeaderContainer open={open}>
          <Title open={open}>{title}</Title>
          <OpenLink onClick={e => onClickHandler(e, link)}>↗</OpenLink>
        </HeaderContainer>

        <Body>{body}</Body>

        <Footer>
          {tags.map((tag, i) => <Tag key={`card-tag-${i}-${tag}`}>{tag}</Tag>)}
        </Footer>
      </CardContainer>
      <Expander open={open}>
        <ExpanderClose onClick={e => closeHandler(e, id)} />
        <ExpanderBody dangerouslySetInnerHTML={{ __html: html }} />
      </Expander>
    </Card>
  );
};
