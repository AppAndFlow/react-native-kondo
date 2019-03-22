export interface Border {
  borderWidth: number;
  borderColor: string;
}

export interface Shadow {
  elevation: number;
  shadowColor: keyof typeof colors | string;
  shadowOffset: { height: number; width: number };
  shadowOpacity: keyof typeof opacity;
  shadowRadius: number;
}

export interface Theme {
  borders: Border[];
  colors: object;
  fonts: {};
  fontSizes: number[];
  letterSpacings: number[];
  lineHeights: number[];
  opacity: number[];
  shadows: Shadow[];
  space: number[];
}

const colors = {
  black: '#171717',
};

const opacity = [1, 0.6, 0.3];

const theme: Theme = {
  borders: [
    { borderColor: colors.black, borderWidth: 1 },
    { borderColor: colors.black, borderWidth: 3 },
    { borderColor: colors.black, borderWidth: 5 },
  ],
  colors,
  fonts: {},
  fontSizes: [12, 14, 16, 20, 24, 32],
  letterSpacings: [1],
  lineHeights: [1, 1.5, 2],
  opacity,
  shadows: [
    {
      elevation: 1,
      shadowColor: colors.black,
      shadowOffset: { height: 1, width: 1 },
      shadowOpacity: opacity[2],
      shadowRadius: 1,
    },
    {
      elevation: 3,
      shadowColor: colors.black,
      shadowOffset: { height: 3, width: 1 },
      shadowOpacity: opacity[2],
      shadowRadius: 3,
    },
    {
      elevation: 5,
      shadowColor: colors.black,
      shadowOffset: { height: 5, width: 1 },
      shadowOpacity: opacity[2],
      shadowRadius: 5,
    },
  ],
  space: [0, 4, 8, 16, 32, 64],
};

export default theme;
