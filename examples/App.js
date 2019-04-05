import React from 'react';
import { ThemeProvider } from 'react-native-kondo';

import HomeScreen from './HomeScreen';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <HomeScreen />
  </ThemeProvider>
);

export default App;
