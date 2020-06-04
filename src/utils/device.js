const size = {
  mobileStart: "320px",
  mobileEnd: "480px",
  tabletStart: "481px",
  tabletEnd: "768px",
  smallLaptopStart: "769px",
  smallLaptopEnd: "1280px",
  desktopStart: "1281px",
  desktopEnd: "2560px",
  screen4k: "2560px",
};

/**
 * 320px — 480px: Mobile devices
 * 481px — 768px: iPads, Tablets
 * 769px — 1024px: Small screens, laptops
 * 1025px — 1200px: Desktops, large screens
 * 1201px and more —  Extra large screens, TV
 */
export const device = {
  mobile: `(min-width: ${size.mobileStart}) and (max-width: ${size.mobileEnd})`,
  tablet: `(min-width: ${size.tabletStart}) and (max-width: ${size.tabletEnd})`,
  smallLaptop: `(min-width: ${size.smallLaptopStart}) and (max-width: ${size.smallLaptopEnd})`,
  desktop: `(min-width: ${size.desktopStart}) and (max-width: ${size.desktopEnd})`,
  screen4k: `(min-width: ${size.screen4k})`,
};
