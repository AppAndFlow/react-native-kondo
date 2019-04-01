import * as React from 'react';
import {
  Box,
  BoxProps,
  Text,
  TextProps,
  Touchable,
  TouchableProps,
} from '../src';

export const BoxForDoc = (props: BoxProps) => <Box {...props} />;
export const TextForDoc = (props: TextProps) => <Text {...props} />;
export const TouchableForDoc = (props: TouchableProps) => (
  // @ts-ignore
  <Touchable {...props} />
);
