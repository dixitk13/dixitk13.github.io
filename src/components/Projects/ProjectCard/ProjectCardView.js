import React, { useEffect, useState } from "react";
import * as runtime from "react/jsx-runtime";
import { compileSync, runSync } from "@mdx-js/mdx";

// import { MDXProvider } from "@mdx-js/react";
// import { MDXRenderer } from "gatsby-plugin-mdx";

import {
  Card,
  CardContainer,
  HeaderContainer,
  ViewMore,
  Excerpt,
  Cross,
  Tags,
  Tag,
  Expander,
  ExpanderBody,
  ExpanderClose,
} from "../../../common/ExpandableCard";
import {
  FannedCards,
  // mdxComponents
} from "../../../common";

function compileMDX(mdx) {
  const code = String(
    compileSync(mdx, {
      outputFormat: "function-body",
      development: false,
    })
  );

  return code;
}

const ProjectCardView = ({
  id,
  title,
  link,
  tags,
  body,
  excerpt,
  images,
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

  // MDXProvider no longer seems to be an option for rendering a raw string
  // as rendered MDX components. Picking this compileMDX from issues
  const [content, setContent] = useState();

  useEffect(() => {
    const code = compileMDX(body);
    const { default: Content } = runSync(code, runtime);
    setContent(Content());
  }, [body]);

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
        {excerpt && <Excerpt ariaLabel="Project Overview">{excerpt}</Excerpt>}
      </CardContainer>
      <Expander cardId={id} open={open}>
        <ExpanderBody open={open}>
          {content && content}
          {/* 
            <MDXProvider components={mdxComponents}>
              {body}
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider> 
          */}
        </ExpanderBody>
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

export default ProjectCardView;
