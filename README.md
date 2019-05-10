![react-native-kondo logo](https://raw.githubusercontent.com/AppAndFlow/react-native-kondo/master/assets/logo.png)

# react-native-kondo

React Native primitives and utilities for design systems.

Draws a lot of inspiration from [Rebass](https://github.com/jxnblk/rebass).

## Installation

```sh
npm i react-native-kondo
```

## Usage

Import and use the the components

```jsx
import React from 'react';
import { Box, Text, Touchable } from 'react-native-kondo';

const HomeScreen = () => (
  <Box flex={1} justifyContent="space-between" bg="white" py={5} px={3}>
    <Text fontSize={5} color="deepPurple" textAlign="center">
      Home
    </Text>
    <Box>
      <Touchable alignItems="center" bg="black" border={1} p={3} my={2}>
        <Text fontSize={3} color="white">
          Continue
        </Text>
      </Touchable>
      <Touchable alignItems="center" bg="white" border={1} p={3} my={2}>
        <Text fontSize={3} color="black">
          Cancel
        </Text>
      </Touchable>
    </Box>
  </Box>
);
```

## Documentation

https://react-native-kondo.netlify.com
