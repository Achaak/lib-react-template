import { createCss, StitchesCss } from "@stitches/react";
import { Colors } from "./colors";
import { Shadows } from "./shadows";

export const  stitchesConfig = createCss({
  prefix: "",
  theme: {
    colors: Colors,
    fonts: {
      roboto: "Roboto"
    },
    shadows: Shadows
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
  },
  utils: {
    m: () => (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value
    }),
    mt: () => (value: number | string) => ({
      marginTop: value
    }),
    mr: () => (value: number | string) => ({
      marginRight: value
    }),
    mb: () => (value: number | string) => ({
      marginBottom: value
    }),
    ml: () => (value: number | string) => ({
      marginLeft: value
    }),
    mx: () => (value: number | string) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: () => (value: number | string) => ({
      marginTop: value,
      marginBottom: value
    }),
    linearGradient: () => (value) => ({
      backgroundImage: `linear-gradient(${value})`
    }),

    gridCols: () => (value) => ({
      display: "grid",
      gridTemplateColumns: `repeat(${value}, minmax(0, 1fr))`,
      width: "100%",
      height: "auto",
    }),
    col: () => (value: number | string) => {
      if(!value) return {}
      
      const split = value.toString().split(' ')

      return {
        gridColumn: `${split[1] || "auto"} / span ${split[0]}`
      }
    },
  }
});

export const { styled, css, global, keyframes, getCssString, config, theme } = stitchesConfig

export type CSS = StitchesCss<typeof stitchesConfig>;

export const globalStyles = global({
  h1: { margin: 0 },
  "html, body, #__next": {
    backgroundColor: "$BLUEISH_GRAY",
    color: "$BLACK",
    fontFamily: "$roboto",
    minWidth: 300
  },
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  "li": {
    listStyle: "none"
  },
  "a": {
    textDecoration: "none"
  },

  "::-webkit-scrollbar": {
    width: "7px",
    height: "7px",
    borderRadius: "10px",
  },
  "::-webkit-scrollbar-track": {
    borderRadius: "10px",
    backgroundColor: "#E0E0E0"
  },
  "::-webkit-scrollbar-thumb": {
    background: "#5E6B7E",
    borderRadius: "10px",
  },
});
