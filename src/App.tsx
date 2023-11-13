import Card from './components/Card';

import { ChakraProvider } from '@chakra-ui/react'
import theme from './utils/theme';

function App() {
  return (
    <ChakraProvider theme={ theme }>
      <Card />
    </ChakraProvider>
  );
}

export default App;
