import { keyframes } from "styled-components";

export const slideIn = keyframes`
  0% {
    transform: translateX(0px); 
  }
  100% {
    transform: translateX(100%);
  }
`;

export const polygons = keyframes`
  0% {
    clip-path: polygon(5% 0, 100% 0, 100% 95%, 95% 100%, 0 100%, 0 5%);
  }
  
  10% {
    clip-path: polygon(17% 0, 100% 0, 100% 83%, 83% 100%, 0 100%, 0 17%);
  }
  
  30% {
    clip-path: polygon(33% 0, 100% 0, 100% 66%, 66% 100%, 0 100%, 0 33%);
  }

  50% {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
  
  70% {
    clip-path: polygon(66% 0, 100% 33%, 100% 100%, 33% 100%, 0 66%, 0 0);
  }

  90% {
    clip-path: polygon(83% 0, 100% 17%, 100% 100%, 17% 100%, 0 83%, 0 0);
  }

  99%{
    clip-path: polygon(5% 0, 100% 0, 100% 95%, 95% 100%, 0 100%, 0 5%);
  }
`;
