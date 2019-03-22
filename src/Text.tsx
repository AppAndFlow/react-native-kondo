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
  color: string;
  fontSize: number;
  letterSpacing: number;
  lineHeight: number;
}

function getStyleSheetFromTextProps(props: TextProps, theme: Theme) {
  const { color, fontSize, letterSpacing, lineHeight } = props;
  const style: TextStyle = {};

  return StyleSheet.flatten([
    style,
    { color, fontSize, letterSpacing, lineHeight },
  ]);
}

const Text = (props: TextProps & ReactNativeTextProps) => (
  <ThemeConsumer>
    {(value: any) => (
      <ReactNativeText
        style={{ ...getStyleSheetFromTextProps(props, value.theme) }}
        {...props}
      />
    )}
  </ThemeConsumer>
);

export { Text };

// TODO: move
export const TextForDoc = (props: TextProps) => <Text {...props} />;
