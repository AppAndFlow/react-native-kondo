import * as React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

import { Theme } from './theme';
import { ThemeConsumer } from './ThemeProvider';

export interface BoxProps {
  bg?: string;
  flex?: number;
  height: number;
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
  const { flex, height, width } = props;
  const style: ViewStyle = {};

  if (props.bg) style.backgroundColor = theme.colors.bg || props.bg;
  if (props.m) style.margin = props.m;
  if (props.mb) style.marginBottom = props.mb;
  if (props.ml) style.marginLeft = props.ml;
  if (props.mr) style.marginRight = props.mr;
  if (props.mt) style.marginTop = props.mt;
  if (props.mx) style.marginHorizontal = props.mx;
  if (props.my) style.marginVertical = props.my;
  if (props.p) style.padding = props.p;
  if (props.pb) style.paddingBottom = props.pb;
  if (props.pl) style.paddingLeft = props.pl;
  if (props.pr) style.paddingRight = props.pr;
  if (props.pt) style.paddingTop = props.pt;
  if (props.px) style.paddingHorizontal = props.px;
  if (props.py) style.paddingVertical = props.py;

  return StyleSheet.flatten([style, { flex, height, width }]);
}

const Box = (props: BoxProps & ViewProps) => (
  <ThemeConsumer>
    {(value: any) => (
      <View
        style={{ ...getStyleSheetFromBoxProps(props, value.theme) }}
        {...props}
      />
    )}
  </ThemeConsumer>
);

export { Box };

// TODO: move
export const BoxForDoc = (props: BoxProps) => <Box {...props} />;
