'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { useState } from 'react';
import { ThemeProvider as LibThemeProvider, Theme, ThemeOptions, useTheme } from 'ui-components';


export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // returns default Theme
  const theme = useTheme();
  const [chosenTheme, setChosenTheme] =  useState<string | Theme>(theme);
  return (
    <>
    <form>
    <label>Escolha o tema: </label>
      <select defaultValue={'default'} onChange={(e) => setChosenTheme(e.target.value === 'default' ? theme : e.target.value)}>
        <option value={'default'}>tema padrão</option>
        <option value={'foo'}>Foo</option>
        <option value={'bar'}>Bar</option>
      </select>
    </form>
      <AppRouterCacheProvider>
        <LibThemeProvider theme={chosenTheme as ThemeOptions}>{children}</LibThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
}
