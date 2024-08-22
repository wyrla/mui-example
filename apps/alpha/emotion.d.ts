import '@emotion/react';
import { Theme as LibTheme } from 'ui-components';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends LibTheme {}
}
