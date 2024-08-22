interface Color {
  100: string;
  200: string;
  // 300: string;
  // 400: string;
  // 500: string;
  // 600: string;
  // 700: string;
  // 800: string;
  // 900: string;
}

interface NeutralColor extends Color {
  50: string;
  // A100: string;
  // A200: string;
}

interface AlertColor {
  100: string;
  // 200: string;
  // 300: string;
}

export interface ColorPalette {
  primary: Color;
  secondary: Color;
  // tertiary: Color;
  // neutral: NeutralColor;

  success: AlertColor;
  // info: AlertColor;
  // warning: AlertColor;
  // error: AlertColor;
}
