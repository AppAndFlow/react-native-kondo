import * as React from 'react';

import theme, { Theme } from './theme';

const ThemeContext = React.createContext({ theme });

interface Props {
  children: React.ReactNode;
  theme: Theme;
}

const ThemeProvider = (props: Props) => (
  <ThemeContext.Provider value={{ theme: props.theme }}>
    {props.children}
  </ThemeContext.Provider>
);

ThemeProvider.defaultProps = {
  theme,
};

const ThemeConsumer = ThemeContext.Consumer;

export { ThemeProvider, ThemeConsumer };
