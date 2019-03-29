// TODO: fix margins: it should be applied to an outer <Box />
// TODO: clean code - perhaps use a Set to properly filter out Box props instead of destructuring

import * as React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { Box, BoxProps } from './Box';
import { Theme } from './theme';
import { ThemeConsumer } from './ThemeProvider';

export interface TouchableProps {
  children: React.ReactNode;
}

function getStyleSheetFromTouchableProps(props: TouchableProps, theme: Theme) {
  return {};
}

const Touchable = ({
  children,
  style,
  ...props
}: BoxProps &
  TouchableProps &
  TouchableOpacityProps &
  TouchableNativeFeedback) => {
  const {
    alignItems,
    alignSelf,
    bg,
    flex,
    flexDirection,
    flexWrap,
    height,
    justifyContent,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    p,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
    shadow,
    width,
  } = props;
  const boxProps = {
    alignItems,
    alignSelf,
    bg,
    flex,
    flexDirection,
    flexWrap,
    height,
    justifyContent,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    p,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
    shadow,
    width,
  };

  return (
    <ThemeConsumer>
      {(value: { theme: Theme }) => (
        <TouchableOpacity
          style={[getStyleSheetFromTouchableProps(props, value.theme), style]}
          {...props}
        >
          <Box {...boxProps}>{children}</Box>
        </TouchableOpacity>
      )}
    </ThemeConsumer>
  );
};

export { Touchable };
