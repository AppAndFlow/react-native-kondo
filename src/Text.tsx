import * as React from 'react';
import {
  StyleSheet,
  Text as ReactNativeText,
  TextProps,
  TextStyle,
} from 'react-native';

interface Props {
  fontSize: number;
}

function getStyleSheetFromTextProps(props: Props) {
  const { fontSize } = props;
  const style: TextStyle = {};

  return StyleSheet.flatten([style, { fontSize }]);
}

const Text = (props: Props & TextProps) => (
  <ReactNativeText
    style={{ ...getStyleSheetFromTextProps(props) }}
    {...props}
  />
);

export { Text };
