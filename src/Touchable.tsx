import * as React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import { Box, BoxProps } from './Box';
import { Theme } from './theme';
import { ThemeConsumer } from './ThemeProvider';

export interface TouchableProps extends BoxProps {
  children: React.ReactNode;
}

function getStyleSheetFromTouchableProps(props: BoxProps, theme: Theme) {
  const style: ViewStyle = {};

  if (props.m != undefined) {
    style.margin = theme.space[props.m] || props.m;
  }

  if (props.mb != undefined) {
    style.marginBottom = theme.space[props.mb] || props.mb;
  }

  if (props.ml != undefined) {
    style.marginLeft = theme.space[props.ml] || props.ml;
  }

  if (props.mr != undefined) {
    style.marginRight = theme.space[props.mr] || props.mr;
  }

  if (props.mt != undefined) {
    style.marginTop = theme.space[props.mt] || props.mt;
  }

  if (props.mx != undefined) {
    style.marginHorizontal = theme.space[props.mx] || props.mx;
  }

  if (props.my != undefined) {
    style.marginVertical = theme.space[props.my] || props.my;
  }

  return style;
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
  const marginProps = {
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
  };
  const innerBoxProps = {
    alignItems,
    alignSelf,
    bg,
    flex,
    flexDirection,
    flexWrap,
    height,
    justifyContent,
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
          style={[
            getStyleSheetFromTouchableProps(marginProps, value.theme),
            style,
          ]}
          {...props}
        >
          <Box {...innerBoxProps}>{children}</Box>
        </TouchableOpacity>
      )}
    </ThemeConsumer>
  );
};

export { Touchable };
