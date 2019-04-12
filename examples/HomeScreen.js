import * as React from 'react';
import { Box, Text, Touchable } from 'react-native-kondo';

const HomeScreen = () => (
  <Box flex={1} justifyContent="center" alignItems="center" bg="linen">
    <Box width={100} height={100} bg="crimson" m={4} border={0} />
    <Text fontSize={4} m={4}>
      Text <Text color="tomato">tomato</Text>
    </Text>
    <Touchable
      bg="plum"
      p={4}
      m={2}
      shadow={0}
      hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
      feedback="highlight"
      style={{ borderRadius: 5 }}
    >
      <Text color="white" fontSize={3}>
        Touchable with highlight
      </Text>
    </Touchable>
    <Touchable
      bg="honeydew"
      p={3}
      m={2}
      hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
      style={{ borderRadius: 5 }}
    >
      <Text color="black" fontSize={3}>
        Touchable with opacity
      </Text>
    </Touchable>
    <Touchable
      bg="aquamarine"
      p={2}
      m={2}
      hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
      feedback="none"
    >
      <Text color="black" fontSize={3}>
        Touchable without feedback
      </Text>
    </Touchable>
  </Box>
);

export default HomeScreen;
