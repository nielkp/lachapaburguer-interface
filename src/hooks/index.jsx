import { CartProvider } from './CartContext';
import { UserProvider } from './UserContext';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <CartProvider>{children}</CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
