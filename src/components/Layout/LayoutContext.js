import React from "react";

export const LayoutContext = React.createContext({
  y: 0,
  theme: "light",
  themeToggle: () => {}
});

export const themesConstants = {
  0: "light",
  1: "dark",
  2: "other"
};
