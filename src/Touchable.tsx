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

export interface TouchableProps
  extends BoxProps,
    TouchableOpacityProps,
    TouchableHighlightProps {
  feedback?: Feedback;
  children: React.ReactNode;
}

const Touchable = ({ style, ...props }: TouchableProps) => (
  <ThemeConsumer>
    {(value: { theme: Theme }) => {
      if (React.Children.count(props.children) > 1) {
        throw new Error(
          'Touchable expects one single React element as children',
        );
      }

      if (props.feedback === Feedback.Opacity) {
        return (
          <TouchableOpacity
            style={[getStyleSheetFromBoxProps(props, value.theme), style]}
            {...props}
          />
        );
      } else if (props.feedback === Feedback.Highlight) {
        return (
          <TouchableHighlight
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

export default Touchable;
