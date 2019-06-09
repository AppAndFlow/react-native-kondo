import * as React from 'react';

import { ThemeContext } from './ThemeProvider';

function useTheme() {
  const theme = React.useContext(ThemeContext);

  return theme;
}

export default useTheme;
