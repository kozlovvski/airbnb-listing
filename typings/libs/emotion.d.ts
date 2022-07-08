import '@emotion/react';

import { ChakraTheme } from '@chakra-ui/react';

declare module '@emotion/react' {
  export interface Theme extends ChakraTheme {}
}
