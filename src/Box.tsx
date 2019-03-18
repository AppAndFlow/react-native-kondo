import * as React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

interface Props {
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

function getStyleSheetFromBoxProps(props: Props) {
  const { height, width } = props;
  const style: ViewStyle = {};

  if (props.bg) {
    style.backgroundColor = props.bg;
  }

  return StyleSheet.flatten([style, { height, width }]);
}

const Box = (props: Props & ViewProps) => (
  <View style={{ ...getStyleSheetFromBoxProps(props) }} {...props} />
);

export { Box };
