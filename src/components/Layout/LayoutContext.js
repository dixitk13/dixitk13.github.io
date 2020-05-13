import React from "react";
import { invert } from "lodash";
export const LayoutContext = React.createContext({
  y: 0,
  theme: "light",
  themeToggle: () => {},
});

// 0 => normal
// 1 => dark
// 2 => other, lets call it love

export const themesConstants = {
  0: "light",
  1: "dark",
  2: "love",
};

export const invertedThemeConstants = invert(themesConstants);
export const getInitialTheme = () => {
  // windowGlobal because Gatsby ¯\_(ツ)_/¯
  let windowGlobal = typeof window !== "undefined" && window;

  return windowGlobal
    ? windowGlobal.localStorage.getItem("theme") || "light"
    : "light";
};

export const getInitialThemeValue = () => {
  return invertedThemeConstants[getInitialTheme()];
};
