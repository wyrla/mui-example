import React from 'react';
import { createTheme, ThemeProvider as MTP } from '@mui/material/styles';
import { Theme } from './theme';
import { ThemeOptions, themes } from './predefined-themes';

const DEFAULT_THEME: Theme = {
  name: 'default',
  palette: {
    primary: {
      '100': '#33648a',
      '200': '#459fa1',
    },
    secondary: {
      '100': '#93d2b7',
      '200': '#f0e2a3',
    },
    success: {
      '100': '#f7daab',
    },
  },
};

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme | ThemeOptions;
}

type IThemeContext = React.Context<Theme>;
const ThemeContext: IThemeContext = React.createContext(DEFAULT_THEME);

type UseTheme = () => Theme;
export const useTheme: UseTheme = () => React.useContext(ThemeContext);

const resolveMui = (theme: Theme) =>
  createTheme({
    palette: {
      primary: {
        main: theme.palette.primary[100],
      },
      secondary: {
        main: theme.palette.secondary[100],
      },
      success: {
        main: theme.palette.success[100],
      },
    },
  });

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = DEFAULT_THEME,
}: ThemeProviderProps) => {
  const t = typeof theme === 'string' ? themes[theme] : theme;
  const compatibleTheme = resolveMui(t);
  return (
    <ThemeContext.Provider value={t}>
      <MTP theme={compatibleTheme}>{children}</MTP>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
