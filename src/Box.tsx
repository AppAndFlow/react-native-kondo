import * as React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

import { Theme, Shadow, Border } from './theme';
import { ThemeConsumer } from './ThemeProvider';

export interface BoxProps {
  alignItems?: ViewStyle['alignItems'];
  alignSelf?: ViewStyle['alignSelf'];
  bg?: string;
  border?: number | Border;
  flex?: number;
  flexDirection?: ViewStyle['flexDirection'];
  flexWrap?: ViewStyle['flexWrap'];
  height?: number;
  justifyContent?: ViewStyle['justifyContent'];
  m?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mx?: number;
  my?: number;
  p?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  px?: number;
  py?: number;
  shadow?: number | Shadow;
  width?: number;
}

export function getStyleSheetFromBoxProps(props: BoxProps, theme: Theme) {
  const {
    alignItems,
    alignSelf,
    flex,
    flexDirection,
    height,
    justifyContent,
    width,
  } = props;
  let style: ViewStyle = {};

  if (props.bg != undefined) {
    style.backgroundColor = theme.colors[props.bg] || props.bg;
  }

  if (props.border != undefined) {
    style = {
      ...style,
      ...(typeof props.border === 'number'
        ? theme.borders[props.border]
        : props.border),
    };
  }

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

  if (props.p != undefined) {
    style.padding = theme.space[props.p] || props.p;
  }

  if (props.pb != undefined) {
    style.paddingBottom = theme.space[props.pb] || props.pb;
  }

  if (props.pl != undefined) {
    style.paddingLeft = theme.space[props.pl] || props.pl;
  }

  if (props.pr != undefined) {
    style.paddingRight = theme.space[props.pr] || props.pr;
  }

  if (props.pt != undefined) {
    style.paddingTop = theme.space[props.pt] || props.pt;
  }

  if (props.px != undefined) {
    style.paddingHorizontal = theme.space[props.px] || props.px;
  }

  if (props.py != undefined) {
    style.paddingVertical = theme.space[props.py] || props.py;
  }

  if (props.shadow != undefined) {
    style = {
      ...style,
      ...(typeof props.shadow === 'number'
        ? theme.shadows[props.shadow]
        : props.shadow),
    };
  }

  return StyleSheet.flatten([
    style,
    {
      alignItems,
      alignSelf,
      flex,
      flexDirection,
      height,
      justifyContent,
      width,
    },
  ]);
}

const Box = ({ style, ...props }: BoxProps & ViewProps) => (
  <ThemeConsumer>
    {(value: { theme: Theme }) => (
      <View
        style={[getStyleSheetFromBoxProps(props, value.theme), style]}
        {...props}
      />
    )}
  </ThemeConsumer>
);

export { Box };
