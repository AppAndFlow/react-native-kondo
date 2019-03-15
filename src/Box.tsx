import * as React from 'react';
import { View, ViewProps } from 'react-native';

interface Props {
  bg: string;
  flex?: number;
  height: number;
  m: number;
  mb: number;
  ml: number;
  mr: number;
  mt: number;
  mx: number;
  my: number;
  p: number;
  pb: number;
  pl: number;
  pr: number;
  pt: number;
  px: number;
  py: number;
  width: number;
}

const Box = (props: Props & ViewProps) => <View {...props} />;

export { Box };
