import * as React from 'react';
import {
  Platform,
  TouchableHighlight,
  TouchableHighlightProps,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';

import Box, { BoxProps, getStyleSheetFromBoxProps } from './Box';
import { Theme } from './theme';
import { ThemeConsumer } from './ThemeProvider';

enum Feedback {
  Opacity = 'opacity',
  Highlight = 'highlight',
  None = 'none',
}

export interface TouchableProps
  extends BoxProps,
    TouchableHighlightProps,
    TouchableNativeFeedbackProps,
    TouchableOpacityProps,
    TouchableWithoutFeedbackProps {
  feedback?: Feedback;
  native?: boolean;
  tintColor?: string;
}

const Touchable = ({ style, ...props }: TouchableProps) => (
  <ThemeConsumer>
    {(value: { theme: Theme }) => {
      if (React.Children.count(props.children) > 1) {
        throw new Error(
          'Touchable expects one single React element as children',
        );
      }

      if (
        props.native &&
        props.feedback !== Feedback.None &&
        Platform.OS === 'android'
      ) {
        const { children, tintColor = '#131313', ...rest } = props;

        return (
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(tintColor)}
            {...rest}
          >
            <Box style={[getStyleSheetFromBoxProps(props, value.theme), style]}>
              {children}
            </Box>
          </TouchableNativeFeedback>
        );
      } else if (props.feedback === Feedback.Highlight) {
        return (
          <TouchableHighlight
            style={[getStyleSheetFromBoxProps(props, value.theme), style]}
            {...props}
          />
        );
      } else if (props.feedback === Feedback.Opacity) {
        return (
          <TouchableOpacity
            style={[getStyleSheetFromBoxProps(props, value.theme), style]}
            {...props}
          />
        );
      } else if (props.feedback === Feedback.None) {
        const { children, ...rest } = props;

        return (
          <TouchableWithoutFeedback {...rest}>
            <Box style={[getStyleSheetFromBoxProps(props, value.theme), style]}>
              {children}
            </Box>
          </TouchableWithoutFeedback>
        );
      }
    }}
  </ThemeConsumer>
);

Touchable.defaultProps = {
  feedback: Feedback.Opacity,
  onPress: () => undefined,
  native: true,
};

export default Touchable;
