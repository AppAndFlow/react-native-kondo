import * as React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { Theme } from './theme';
import { ThemeConsumer } from './ThemeProvider';

export interface TouchableProps {}

function getStyleSheetFromTouchableProps(
  props: TouchableProps & TouchableOpacityProps,
  theme: Theme,
) {
  return {};
}

const Touchable = ({
  style,
  ...props
}: TouchableOpacityProps & TouchableNativeFeedback) => (
  <ThemeConsumer>
    {(value: { theme: Theme }) => (
      <TouchableOpacity
        style={[getStyleSheetFromTouchableProps(props, value.theme), style]}
        {...props}
      />
    )}
  </ThemeConsumer>
);

export { Touchable };
