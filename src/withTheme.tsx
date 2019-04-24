import * as React from 'react';

import { Theme } from './theme';
import { ThemeConsumer } from './ThemeProvider';

export interface WithThemeInjectedProps {
  theme: Theme;
}

const withTheme = (WrappedComponent: React.ComponentType<any>) => {
  return class extends React.Component {
    static displayName = `withTheme(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;

    render() {
      return (
        <ThemeConsumer>
          {(value: { theme: Theme }) => (
            <WrappedComponent theme={value.theme} {...this.props} />
          )}
        </ThemeConsumer>
      );
    }
  };
};

export default withTheme;
