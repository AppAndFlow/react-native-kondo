export interface Border {
  borderWidth: number;
  borderColor: string;
}

export interface Theme {
  borders: Border[];
  colors: object;
  fonts: {};
  fontSizes: number[];
  letterSpacings: number[];
  lineHeights: number[];
  opacity: {};
  shadows: {};
  space: number[];
}

const colors = {
  black: '#171717',
};

const theme: Theme = {
  borders: [
    { borderColor: colors.black, borderWidth: 1 },
    { borderColor: colors.black, borderWidth: 2 },
    { borderColor: colors.black, borderWidth: 3 },
  ],
  colors,
  fonts: {},
  fontSizes: [12, 14, 16, 20, 24, 32],
  letterSpacings: [1],
  lineHeights: [1, 1.5, 2],
  opacity: {},
  shadows: {},
  space: [0, 4, 8, 16, 32, 64],
};

export default theme;
