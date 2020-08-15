import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: {
      small: number;
      normal: number;
    };
    borders: {
      normal: number;
    };
    fonts: {
      light: string;
      medium: string;
    };
    colors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundDark: string;
      backgroundDarker: string;
      text: string;
    };
  }
}
