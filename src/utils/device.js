const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
  screen4k: "1900px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  mobile: `(min-width: ${size.mobileS}) and (max-width: ${size.tablet})`,
  tabletSize: `(max-width: ${size.tablet})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.laptop}) and (max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
  screen4k: `(min-width: ${size.screen4k})`,
};
