![react-native-kondo logo](https://raw.githubusercontent.com/AppAndFlow/react-native-kondo/master/assets/logo.png)

# react-native-kondo

React Native primitives and utilities for design systems.

`react-native-kondo` streamlines the development of apps built around design systems. Notably, this library helps with **building user interfaces that follows a set of constraints** to maximize consistency and aims to **increase developers velocity**. It achieves this by providing a set of React Native primitives (components) that are tightly coupled to a user defined theme. Theme values and scales are accessed via intuitive props on said components. It shares similarities with inline styling but with the addition that it accesses your theme via Context. Lastly, it allows interaction with your theme outside of the provided components through utilities (e.g. hook & HOC) for flexibility. `react-native-kondo` draws a lot of inspiration from [Rebass](https://github.com/jxnblk/rebass).

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
