import * as React from 'react';
import hoistStatics from 'hoist-non-react-statics';

import { Theme } from './theme';
import { ThemeConsumer } from './ThemeProvider';

export interface ThemeInjectedProps {
  theme: Theme;
}

const withTheme = (WrappedComponent: any) => {
  return hoistStatics(
    class EnhancedComponent extends React.Component {
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
    },
    WrappedComponent,
  );
};

export default withTheme;
