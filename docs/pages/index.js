import React from 'react';

import Layout from '../components/Layout';
import Code from '../components/Code';

const Index = () => (
  <Layout>
    <img
      src="https://raw.githubusercontent.com/AppAndFlow/react-native-kondo/master/assets/logo.png"
      alt="react-native-kondo logo"
      className="logo"
    />
    <p>React Native primitives and utilities for design systems.</p>
    <p>
      Draws a lot of inspiration from{' '}
      <a href="https://github.com/rebassjs/rebass">Rebass</a>.
    </p>
    <h2 id="installation">Installation</h2>
    <p>Install react-native-kondo.</p>
    <Code>npm i react-native-kondo</Code>
    <h2 id="usage">Usage</h2>
    <p>Import and use the the components.</p>
    <Code>{`import React from 'react';
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
);`}</Code>
    <h2 id="theme">Theme</h2>
    <p>
      A minimal default theme is already provided as part of the library. You do
      not need to do anything else to use its values within react-native-kondo
      components.
    </p>
    <Code>
      {`const colors = {
  amber: '#ffca28',
  black: '#000000',
  blue: '#42a5f5',
  blueGray: '#78909c',
  brown: '#8d6e63',
  cyan: '#26c6da',
  deepOrange: '#ff7043',
  deepPurple: '#7e57c2',
  gray: '#bdbdbd',
  green: '#66bb6a',
  indigo: '#5c6bc0',
  lightBlue: '#29b6f6',
  lightGreen: '#9ccc65',
  lime: '#d4e157',
  orange: '#ffa726',
  pink: '#ec407a',
  purple: '#ab47bc',
  red: '#ef5350',
  teal: '#26a69a',
  white: '#ffffff',
  yellow: '#ffee58',
};
const theme = {
  borders: [
    { borderColor: colors.black, borderWidth: 1 },
    { borderColor: colors.black, borderWidth: 2 },
    { borderColor: colors.black, borderWidth: 3 },
  ],
  colors,
  fonts: {
    base: null,
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  letterSpacings: [0, 1, 2],
  lineHeights: [12, 16, 32],
  shadows: [
    {
      elevation: 1,
      shadowColor: colors.gray,
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 1,
    },
    {
      elevation: 3,
      shadowColor: colors.gray,
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
    },
    {
      elevation: 5,
      shadowColor: colors.gray,
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
  ],
  space: [0, 4, 8, 16, 32, 64],
};`}
    </Code>
    <p>
      You will almost inevitably want to edit this theme. You can generate a
      copy of this theme with the following command.
    </p>
    <Code>node node_modules/react-native-kondo/dist/init.js</Code>
    <p>
      Make changes so it matches your design system and wrap your application
      with a <code>ThemeProvider</code>. The components will now use your theme
      object.
    </p>
    <Code>
      {`import React from 'react';
import { ThemeProvider } from 'react-native-kondo';

import HomeScreen from './HomeScreen';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <HomeScreen />
  </ThemeProvider>
);`}
    </Code>
    <p>
      If you need to access your theme outside of react-native-kondo components,
      you can use the <code id="useTheme">useTheme</code> hook.
    </p>
    <Code>
      {`import React from 'react';
import { TextInput } from 'react-native';
import { useTheme } from 'react-native-kondo';

const Input = props => {
  const theme = useTheme()

  return (
    <TextInput
      selectionColor={theme.colors.lightGreen}
      style={{ fontSize: theme.fontSizes[3] }}
      {...props}
    />
  );
}`}
    </Code>
    <p>
      Alternatively, there is the <code id="withTheme">withTheme</code>{' '}
      higher-order component (HOC).
    </p>
    <Code>
      {`import React from 'react';
import { TextInput } from 'react-native';
import { withTheme } from 'react-native-kondo';

const Input = props => (
  <TextInput
    selectionColor={props.theme.colors.lightGreen}
    style={{ fontSize: props.theme.fontSizes[3] }}
    {...props}
  />
);

export default withTheme(Input);
`}
    </Code>
    <style jsx>
      {`
        .logo {
          width: 100%;
          height: auto;
        }
      `}
    </style>
  </Layout>
);

export default Index;
