import * as React from 'react';
import {
  StyleSheet,
  Text as ReactNativeText,
  TextProps as ReactNativeTextProps,
  TextStyle,
} from 'react-native';

import { Theme } from './theme';
import { ThemeConsumer } from './ThemeProvider';

export interface TextProps extends ReactNativeTextProps {
  color?: string;
  fontFamily?: TextStyle['fontFamily'];
  fontSize?: number;
  letterSpacing?: number;
  lineHeight?: number;
  textAlign?: TextStyle['textAlign'];
}

function getStyleSheetFromTextProps(props: TextProps, theme: Theme) {
  const style: TextStyle = {};
  const { textAlign } = props;

  if (props.color != undefined) {
    style.color = theme.colors[props.color] || props.color;
  }

  if (props.fontFamily != undefined) {
    style.fontFamily = theme.fonts[props.fontFamily] || props.fontFamily;
  }

  if (props.fontSize != undefined) {
    style.fontSize = theme.fontSizes[props.fontSize] || props.fontSize;
  }

  if (props.letterSpacing != undefined) {
    style.letterSpacing =
      theme.letterSpacings[props.letterSpacing] || props.letterSpacing;
  }

  if (props.lineHeight != undefined) {
    style.lineHeight = theme.lineHeights[props.lineHeight] || props.lineHeight;
  }

  return StyleSheet.flatten([style, { textAlign }]);
}

const Text = ({ style, ...props }: TextProps) => (
  <ThemeConsumer>
    {(value: { theme: Theme }) => (
      <ReactNativeText
        style={[getStyleSheetFromTextProps(props, value.theme), style]}
        {...props}
      />
    )}
  </ThemeConsumer>
);

export { Text };
