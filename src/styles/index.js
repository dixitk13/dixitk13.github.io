import theme from "styled-theming";

export const fontColor = theme("theme", {
  light: "rgba(0, 0, 0, 0.75)",
  dark: "rgba(255, 255, 255, 0.75)",
  other: "rgba(0, 0, 0, 0.75)"
});

export const borderColor = theme("theme", {
  light: "#fff",
  dark: "#000",
  other: "#fff"
});

export const boxShadow = theme("theme", {
  light: "rgba(0, 0, 0, 0.08) 0px 4px 8px",
  dark: "rgba(255, 255, 255, 1) 0px 4px 8px",
  other: "#fff"
});

export const background = theme("theme", {
  light: "rgba(255, 255, 255, 1)",
  dark: "rgb(23, 23, 23)",
  other: "#fff"
});

export const entireBackground = theme("theme", {
  light: "rgba(255, 255, 255, 1)",
  dark: "rgb(34, 35, 38)",
  other: "#fff"
});
