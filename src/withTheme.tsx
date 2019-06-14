import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { Theme } from './theme';
import useTheme from './useTheme';

export interface ThemeInjectedProps {
  theme: Theme;
}

function withTheme<OuterProps>(
  WrappedComponent: React.ComponentType<OuterProps & ThemeInjectedProps>,
): React.ComponentType<OuterProps> {
  const WithThemeComponent = ({ forwardedRef, ...props }: any) => {
    const theme = useTheme();

    return <WrappedComponent ref={forwardedRef} theme={theme} {...props} />;
  };

  WithThemeComponent.displayName = `withTheme(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;
  hoistNonReactStatics(WithThemeComponent, WrappedComponent);
  // @ts-ignore
  // eslint-disable-next-line
  return React.forwardRef((props, ref) => (
    <WithThemeComponent forwardedRef={ref} {...props} />
  ));
}

export default withTheme;
