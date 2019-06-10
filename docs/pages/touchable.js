import React from 'react';
import Link from 'next/link';

import Code from '../components/Code';

const Touchable = () => (
  <div>
    <h1>Touchable</h1>
    <p>
      Touchable renders a React Native <code>TouchableHighlight</code>,{' '}
      <code>TouchableNativeFeedback</code>, <code>TouchableOpacity</code> or{' '}
      <code>TouchableWithoutFeedback</code> component based on the{' '}
      <code>feedback</code> props.
    </p>
    <h2>Usage</h2>
    <Code>
      {`<Touchable
  justifyContent="center"
  alignItems="center"
  bg="cornflowerblue"
  p={3}
>
  <Text fontSize={2} color="ghostwhite">
    Touchable
  </Text>
</Touchable>`}
    </Code>
    <h2>Props</h2>
    <ul>
      <li>
        <code>feedback?: </code>
        Feedback.Opacity | Feedback.Highlight | Feedback.None (defaults to
        Feedback.Opacity
      </li>
      <li>
        <code>native?: </code>
        boolean (defaults to true)
      </li>
      <li>
        <code>
          Any{' '}
          <Link>
            <a href="/box">Box</a>
          </Link>{' '}
          props
        </code>
      </li>
      <li>
        <code>
          Any TouchableHighlight, TouchableNativeFeedback, TouchableOpacity or
          TouchableWithoutFeedback props
        </code>
      </li>
    </ul>
  </div>
);

export default Touchable;
