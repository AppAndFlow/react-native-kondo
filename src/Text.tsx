import * as React from 'react';
import {
  StyleSheet,
  Text as ReactNativeText,
  TextProps as ReactNativeTextProps,
  TextStyle,
} from 'react-native';

import { Theme } from './theme';
import { ThemeConsumer } from './ThemeProvider';

export interface TextProps {
  color?: string;
  fontSize?: number;
  letterSpacing?: number;
  lineHeight?: number;
  textAlign?: TextStyle['textAlign'];
}

function getStyleSheetFromTextProps(props: TextProps, theme: Theme) {
  const style: TextStyle = {};
  const { textAlign } = props;

  if (props.color) style.color = theme.colors[props.color] || props.color;
  if (props.fontSize)
    style.fontSize = theme.fontSizes[props.fontSize] || props.fontSize;
  if (props.letterSpacing)
    style.letterSpacing =
      theme.letterSpacings[props.letterSpacing] || props.letterSpacing;
  if (props.lineHeight)
    style.lineHeight = theme.lineHeights[props.lineHeight] || props.lineHeight;

  return StyleSheet.flatten([style, { textAlign }]);
}

const Text = ({ style, ...props }: TextProps & ReactNativeTextProps) => (
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
