import LayoutConfigTypes from "@/core/config/LayoutConfigTypes";

const config: LayoutConfigTypes = {
  themeName: "SMM",
  themeVersion: "8.0.38",
  demo: "demo1",
  main: {
    type: "default",
    primaryColor: "#f7eb00",
    logo: {
      dark: "media/logos/logo-1-dark.png",
      light: "media/logos/logo-1-dark.png",
    },
  },
  illustrations: {
    set: "sketchy-1",
  },
  loader: {
    logo: "media/logos/logo-1-dark.png",
    display: true,
    type: "default",
  },
  scrollTop: {
    display: true,
  },
  header: {
    display: true,
    menuIcon: "font",
    width: "fluid",
    fixed: {
      desktop: true,
      tabletAndMobile: true,
    },
  },
  toolbar: {
    display: true,
    width: "fluid",
    fixed: {
      desktop: true,
      tabletAndMobile: true,
    },
  },
  aside: {
    display: true,
    theme: "dark",
    fixed: true,
    menuIcon: "svg",
    minimized: false,
    minimize: true,
    hoverable: true,
  },
  content: {
    width: "fixed",
  },
  footer: {
    width: "fluid",
  },
};

export default config;
