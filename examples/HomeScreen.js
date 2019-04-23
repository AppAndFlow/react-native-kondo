import * as React from 'react';
import { Box, Text, Touchable } from 'react-native-kondo';

const HomeScreen = () => (
  <Box flex={1} justifyContent="space-between" bg="white" px={3} py={5}>
    <Text fontSize={5} textAlign="center" color="deepPurple">
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

export default HomeScreen;
