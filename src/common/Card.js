import styled from "styled-components";
import { rhythm } from "../utils/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ef9a9a;
  border-radius: 4px;
  overflow: hidden;
  margin: 5px;
  padding: ${rhythm(2)};
  &:first-child {
    margin-top: 0;
  }
`;

export const Header = styled.div`
  color: #d32f2f;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  border-bottom: 1px solid #ef9a9a;
  background-color: #ffebee;
  padding: 5px 10px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const Description = styled.div`
  color: #d32f2f;
  font-size: 12px;
  text-align: center;
`;
