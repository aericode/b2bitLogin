import { ReactNode, useState, FC } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { theme } from '../../theme';

type ThemeContextProps = {
  children: ReactNode;
};

const ThemeContext: FC<ThemeContextProps> = ({ children }) => {
  const [themeApp] = useState(theme);

  return (
    <StyledComponentsThemeProvider theme={themeApp}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeContext;