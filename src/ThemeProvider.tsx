import * as React from 'react';

import theme, { Theme } from './theme';

const ThemeContext = React.createContext({});

interface Props {
  children: React.ReactNode;
  theme: Theme;
}

const ThemeProvider = (props: Props) => (
  <ThemeContext.Provider value={props.theme}>
    {props.children}
  </ThemeContext.Provider>
);

ThemeProvider.defaultProps = {
  theme,
};

export default ThemeProvider;
