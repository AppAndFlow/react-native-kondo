import * as React from 'react';
import { ThemeConsumer } from './ThemeProvider';

const withTheme = (WrappedComponent: React.ComponentType<any>) => {
  return class extends React.Component {
    static displayName = `withTheme(${WrappedComponent.displayName ||
      WrappedComponent.name})`;

    render() {
      return (
        <ThemeConsumer>
          {theme => <WrappedComponent theme={theme} {...this.props} />}
        </ThemeConsumer>
      );
    }
  };
};

export default withTheme;
