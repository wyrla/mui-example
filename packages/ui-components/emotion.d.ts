import '@emotion/react'
import { Theme as LibTheme } from './src/ThemeProvider'

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends LibTheme {}
}