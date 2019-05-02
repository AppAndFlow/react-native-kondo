import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { Theme } from './theme';
import { ThemeConsumer } from './ThemeProvider';

export interface ThemeInjectedProps {
  theme: Theme;
}

const withTheme = (WrappedComponent: any) => {
  class WithThemeComponent extends React.Component<any> {
    static displayName = `withTheme(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;

    render() {
      const { forwardedRef, ...props } = this.props;

      return (
        <ThemeConsumer>
          {(value: { theme: Theme }) => (
            <WrappedComponent
              ref={forwardedRef}
              theme={value.theme}
              {...props}
            />
          )}
        </ThemeConsumer>
      );
    }
  }

  hoistNonReactStatics(WithThemeComponent, WrappedComponent);
  // eslint-disable-next-line react/display-name
  return React.forwardRef((props, ref) => (
    <WithThemeComponent forwardedRef={ref} {...props} />
  ));
};

export default withTheme;
