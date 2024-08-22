import { Theme } from "./theme";

const THEME_OPTIONS = {
  foo: 'foo',
  bar: 'bar'
} as const;

export type ThemeOptions = keyof typeof THEME_OPTIONS;

type Themes = Record<ThemeOptions, Theme>;

export const themes: Themes = {
  bar: {
    name: 'BAR',
    palette: {
      primary: {
        "100": "#a8d3a1",
        "200": "#f0e37f"
      },
      secondary: {
        "100": "#f7b155",
        "200": "#7dbd42"
      },
      success: {
        "100": "#f78e6e"
      },
    }
  },
  foo: {
    name: 'FOO',
    palette: {
      primary: {
        "100": "#2b3d4f",
        "200": "#3398db"
      },
      secondary: {
        "100": "#8d43ad",
        "200": "#f39c12"
      },
      success: {
        "100": "#e74d3c"
      },
    }
  }
};