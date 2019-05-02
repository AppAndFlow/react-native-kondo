import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { Theme } from './theme';
import { ThemeConsumer } from './ThemeProvider';

export interface ThemeInjectedProps {
  theme: Theme;
}

function withTheme<OuterProps>(
  WrappedComponent: React.ComponentType<OuterProps & ThemeInjectedProps>,
): React.ComponentClass<OuterProps> {
  class WithThemeComponent extends React.Component<any> {
    static displayName = `withTheme(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;

    render() {
      const { forwardedRef, ...props } = this.props;

      return (
        <ThemeConsumer>
          {(value: { theme: Theme }) => (
            // @ts-ignore
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
  // @ts-ignore
  // eslint-disable-next-line
  return React.forwardRef((props, ref) => (
    <WithThemeComponent forwardedRef={ref} {...props} />
  ));
}

export default withTheme;
