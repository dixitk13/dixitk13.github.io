import theme from "styled-theming";
import trianglify from "../../static/img/trianglify.svg";

export const fontColor = theme("theme", {
  light: "#1f2933",
  dark: "rgba(255, 255, 255, 0.75)",
  love: "#ffa7c4",
});

export const fontHover = theme("theme", {
  light: "rgba(39, 110, 241, 1)",
  dark: "rgba(39, 110, 241, 1)",
  love: "#dd86a3",
});

export const borderColor = theme("theme", {
  light: "#ced4da",
  dark: "rgba(255, 255, 255, 0.75)",
  love: "#ffa7c4",
});

export const expandedCardContent = theme("theme", {
  light: "#ced4da",
  dark: "rgba(21, 21, 21, 1)",
  love: "#ffffff",
});

export const boxShadow = theme("theme", {
  light: "rgba(0, 0, 0, 0.08) 0px 4px 8px",
  dark: "rgba(255, 255, 255, 1) 0px 2px 4px",
  love: "#ffa7c4 0px 2px 4px",
});

export const background = theme("theme", {
  light: "rgba(255, 255, 255, 1)",
  dark: "rgb(23, 23, 23)",
  love: "rgba(255, 255, 255, 1)",
});

export const entireBackground = theme("theme", {
  light: "rgba(245, 245, 245, 1)",
  dark: "rgb(34, 35, 38)",
  love: "",
});

export const entireBackgroundImage = theme("theme", {
  light: "",
  dark: "",
  love: `url(${trianglify})`,
});

export const commonTransition = `all 0.3s ease`;
