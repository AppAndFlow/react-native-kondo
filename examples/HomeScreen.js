import * as React from 'react';
import { Box, Text, Touchable } from 'react-native-kondo';

import Input from './Input';

class HomeScreen extends React.Component {
  _input = React.createRef();

  componentDidMount() {
    if (this._input.current) {
      this._input.current.focus();
    }
  }

  render() {
    return (
      <Box flex={1} justifyContent="space-between" bg="white" px={3} py={5}>
        <Text fontSize={5} textAlign="center" color="deepPurple">
          Home
        </Text>
        <Input ref={this._input} placeholder="Placeholder" />
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
  }
}

export default HomeScreen;
