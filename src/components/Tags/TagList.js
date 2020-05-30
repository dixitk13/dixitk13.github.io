import React from "react";
import { kebabCase } from "lodash";
import { Link } from "gatsby";
import styled, { css } from "styled-components";

import { rhythm, device } from "../../utils";
import { BlogMain } from "../Blog";
import { Icons } from "../../../static/svg";
import { Emojis } from "../../../static/svg/emojis";

import { background, fontColor } from "../../styles";

const boxDim = "150px";
const mobileBoxDim = "150px";

const TagsUnorderedList = styled.ul`
  margin: ${rhythm(2)} 0 0 0;
  list-style: none;
  display: grid;
  grid-gap: ${rhythm(0.5)};
  grid-template-columns: repeat(4, ${boxDim});
  @media ${device.mobile} {
    grid-template-columns: repeat(2, ${mobileBoxDim});
  }
`;

const TagImage = styled.span`
  transition: all 0.3s;

  ${({ minimal }) =>
    !minimal &&
    css`
      transform: rotate(-45deg);
    `}

  margin-bottom: 0;
`;

const EmojiImage = styled(TagImage)`
  font-size: 45px;
`;

const StyledListItem = styled.li`
  margin: 0;
  height: ${boxDim};
  width: ${boxDim};
  border-radius: 5px;
  position: relative;
  transition: all 0.3s;
  list-style: none;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateZ(-12px);
  }
  @media ${device.mobile} {
    height: ${mobileBoxDim};
    width: ${mobileBoxDim};
  }

  a {
    background: ${background};
    color: ${fontColor};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 15px;
    padding: ${rhythm(0.5)} ${rhythm(0.5)} ${rhythm(0.25)} ${rhythm(0.5)};
    border-radius: 3px;
    text-decoration: none;
    text-align: center;
    &:hover {
      ${TagImage} {
        transform: unset;
      }
    }
  }
`;

const TagsListContainer = styled(BlogMain)``;

const NumCount = styled.span`
  position: absolute;
  transform: rotate(0deg);
  height: 27px;
  width: 33px;
  border-radius: 3px 3px 3px 9px;
  background: rgb(217, 68, 73);
  text-align: center;
  margin: 0 auto;
  color: #fff;
  top: 0;
  right: 0;
`;

const Text = styled.div`
  width: 100%;
  align-self: flex-end;
`;

export const TagList = ({ group }) => {
  return (
    <TagsListContainer>
      <TagsUnorderedList>
        {group.map((tag, index) => (
          <TagListItem
            tagValue={tag.fieldValue}
            count={tag.totalCount}
            key={`${tag.fieldValue}-${index}`}
          />
        ))}
      </TagsUnorderedList>
    </TagsListContainer>
  );
};

export const TagListItem = ({ tagValue, count, minimal }) => {
  if (minimal) {
    return <Image minimal={minimal} tagValue={tagValue} />;
  }
  return (
    <StyledListItem>
      <Link to={`/tags/${kebabCase(tagValue)}/`}>
        <Image tagValue={tagValue} />
        <Text>{tagValue}</Text>
      </Link>
      <NumCount>{count}</NumCount>
    </StyledListItem>
  );
};

const Image = ({ tagValue, minimal }) => {
  if (Emojis[tagValue]) {
    return (
      <EmojiImage minimal={minimal} as="div">
        {Emojis[tagValue]}
      </EmojiImage>
    );
  }

  return (
    <TagImage
      as="img"
      width="55px"
      height="55px"
      minimal={minimal}
      src={Icons[tagValue]}
      alt={tagValue}
    />
  );
};
