export interface Border {
  borderWidth?: number;
  borderColor?: string;
}

export interface Shadow {
  elevation?: number;
  shadowColor?: keyof typeof colors | string;
  shadowOffset?: { height: number; width: number };
  shadowOpacity?: typeof opacity[0] | number;
  shadowRadius?: number;
}

export interface Theme {
  borders: Border[];
  colors: { [key: string]: string };
  fonts: { [key: string]: string };
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
const theme = {
  borders: [
    { borderColor: colors.black, borderWidth: 1 },
    { borderColor: colors.black, borderWidth: 3 },
    { borderColor: colors.black, borderWidth: 5 },
  ],
  colors,
  fonts: {},
  fontSizes: [12, 14, 16, 20, 24, 32],
  letterSpacings: [0, 1, 2],
  lineHeights: [12, 16, 32],
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
      elevation: 2,
      shadowColor: colors.black,
      shadowOffset: { height: 2, width: 2 },
      shadowOpacity: opacity[2],
      shadowRadius: 2,
    },
    {
      elevation: 3,
      shadowColor: colors.black,
      shadowOffset: { height: 3, width: 3 },
      shadowOpacity: opacity[2],
      shadowRadius: 3,
    },
  ],
  space: [0, 4, 8, 16, 32, 64],
};

export default theme;
