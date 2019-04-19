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
  amber: '#ffca28',
  black: '#000000',
  blue: '#42a5f5',
  blueGray: '#78909c',
  brown: '#8d6e63',
  cyan: '#26c6da',
  deepOrange: '#ff7043',
  deepPurple: '#7e57c2',
  gray: '#bdbdbd',
  green: '#66bb6a',
  indigo: '#5c6bc0',
  lightBlue: '#29b6f6',
  lightGreen: '#9ccc65',
  lime: '#d4e157',
  orange: '#ffa726',
  pink: '#ec407a',
  purple: '#ab47bc',
  red: '#ef5350',
  teal: '#26a69a',
  white: '#ffffff',
  yellow: '#ffee58',
};
const opacity = [1, 0.6, 0.3];
const theme: Theme = {
  borders: [
    { borderColor: colors.black, borderWidth: 1 },
    { borderColor: colors.black, borderWidth: 2 },
    { borderColor: colors.black, borderWidth: 3 },
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
