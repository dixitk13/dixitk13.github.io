import styled from "styled-components";
export const CircularImage = styled.img.attrs({
  tabIndex: 0,
})`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin: 10px auto;
  align-self: center;
  margin-bottom: 1rem;
  background-size: cover;
`;
