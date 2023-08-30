import { ChakraProvider } from '@chakra-ui/react';

import GlobalState from './contexts/GlobalState';
import AppRoutes from './routes/Router';
import GlobalStyle from './theme/GlobalStyle';

function App() {
  return (
    <ChakraProvider>
      <GlobalState>
        <GlobalStyle />
        <AppRoutes />
      </GlobalState>
    </ChakraProvider>
  );
}

export default App;
