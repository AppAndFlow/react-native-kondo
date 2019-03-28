import * as React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

import { Theme } from './theme';
import { ThemeConsumer } from './ThemeProvider';

export interface BoxProps {
  alignItems?: ViewStyle['alignItems'];
  alignSelf?: ViewStyle['alignSelf'];
  bg?: string;
  flex?: number;
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
  width?: number;
}

function getStyleSheetFromBoxProps(props: BoxProps, theme: Theme) {
  const { alignItems, alignSelf, flex, height, justifyContent, width } = props;
  const style: ViewStyle = {};

  if (props.bg) style.backgroundColor = theme.colors[props.bg] || props.bg;
  if (props.m) style.margin = theme.space[props.m] || props.m;
  if (props.mb) style.marginBottom = theme.space[props.mb] || props.mb;
  if (props.ml) style.marginLeft = theme.space[props.ml] || props.ml;
  if (props.mr) style.marginRight = theme.space[props.mr] || props.mr;
  if (props.mt) style.marginTop = theme.space[props.mt] || props.mt;
  if (props.mx) style.marginHorizontal = theme.space[props.mx] || props.mx;
  if (props.my) style.marginVertical = theme.space[props.my] || props.my;
  if (props.p) style.padding = theme.space[props.p] || props.p;
  if (props.pb) style.paddingBottom = theme.space[props.pb] || props.pb;
  if (props.pl) style.paddingLeft = theme.space[props.pl] || props.pl;
  if (props.pr) style.paddingRight = theme.space[props.pr] || props.pr;
  if (props.pt) style.paddingTop = theme.space[props.pt] || props.pt;
  if (props.px) style.paddingHorizontal = theme.space[props.px] || props.px;
  if (props.py) style.paddingVertical = theme.space[props.py] || props.py;

  return StyleSheet.flatten([
    style,
    { alignItems, alignSelf, flex, height, justifyContent, width },
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
