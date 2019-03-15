import * as React from 'react';

import theme, { Theme } from './theme';

const ThemeContext = React.createContext({});

interface Props {
  children: (theme: Theme) => React.ReactNode;
  theme: Theme;
}

const ThemeProvider = (props: Props) => (
  <ThemeContext.Provider value={props.theme}>
    {props.children(theme)}
  </ThemeContext.Provider>
);

ThemeProvider.defaultProps = {
  theme,
};

export default ThemeProvider;
