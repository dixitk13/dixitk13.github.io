import Typography from "typography";

const fonts = [
  "-apple-system",
  "system-ui",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica Neue",
  "Arial",
  "sans-serif",
];
const typography = new Typography({
  baseFontSize: "14px",
  baseLineHeight: 1.65,
  headerFontFamily: fonts,
  bodyFontFamily: fonts,
});

export default typography;
export const rhythm = typography.rhythm;
