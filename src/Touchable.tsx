import * as React from 'react';
import {
  TouchableHighlight,
  TouchableHighlightProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { BoxProps, getStyleSheetFromBoxProps } from './Box';
import { Theme } from './theme';
import { ThemeConsumer } from './ThemeProvider';

enum Feedback {
  Highlight = 'highlight',
  Opacity = 'opacity',
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TouchableProps extends BoxProps {
  feedback: Feedback;
}

const Touchable = ({
  feedback,
  style,
  ...props
}: TouchableProps & TouchableOpacityProps & TouchableHighlightProps) => (
  <ThemeConsumer>
    {(value: { theme: Theme }) => {
      if (feedback === Feedback.Highlight) {
        return (
          <TouchableHighlight
            style={[getStyleSheetFromBoxProps(props, value.theme), style]}
            {...props}
          />
        );
      } else if (feedback === Feedback.Opacity) {
        return (
          <TouchableOpacity
            style={[getStyleSheetFromBoxProps(props, value.theme), style]}
            {...props}
          />
        );
      }
    }}
  </ThemeConsumer>
);

Touchable.defaultProps = {
  feedback: Feedback.Opacity,
  onPress: () => undefined,
};

export { Touchable };
