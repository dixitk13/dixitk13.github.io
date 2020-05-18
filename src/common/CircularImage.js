import styled from "styled-components";
export const CircularImage = styled.img.attrs({
  tabIndex: 0,
  loading: "lazy",
  alt: "...",
})`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  margin: 10px;
  align-self: center;
  margin-bottom: 1rem;
  background-size: cover;
`;
