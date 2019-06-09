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
import useTheme from './useTheme';

export enum Feedback {
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
}

function Touchable({ children, style, ...props }: TouchableProps) {
  if (React.Children.count(children) > 1) {
    throw new Error('Touchable expects one single React element as children');
  }

  const theme = useTheme();

  if (
    props.native &&
    props.feedback !== Feedback.None &&
    Platform.OS === 'android'
  ) {
    return (
      <TouchableNativeFeedback {...props}>
        <Box style={[getStyleSheetFromBoxProps(props, theme).box, style]}>
          {children}
        </Box>
      </TouchableNativeFeedback>
    );
  } else if (props.feedback === Feedback.Highlight) {
    return (
      <TouchableHighlight
        style={[getStyleSheetFromBoxProps(props, theme).box, style]}
        {...props}
      >
        {children}
      </TouchableHighlight>
    );
  } else if (props.feedback === Feedback.Opacity) {
    return (
      <TouchableOpacity
        style={[getStyleSheetFromBoxProps(props, theme).box, style]}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  } else if (props.feedback === Feedback.None) {
    return (
      <TouchableWithoutFeedback {...props}>
        <Box style={[getStyleSheetFromBoxProps(props, theme).box, style]}>
          {children}
        </Box>
      </TouchableWithoutFeedback>
    );
  }
}

Touchable.defaultProps = {
  feedback: Feedback.Opacity,
  native: true,
};

export default Touchable;
