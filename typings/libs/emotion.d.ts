import { ChakraTheme } from '@chakra-ui/react';
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends ChakraTheme {}
}
