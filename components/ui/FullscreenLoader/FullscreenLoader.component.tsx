import { Flex, FlexProps, Spinner } from '@chakra-ui/react';

const FullscreenLoader = (props: FlexProps) => (
  <Flex justify="center" align="center" w="100%" minH="100vh" {...props}>
    <Spinner />
  </Flex>
);

export default FullscreenLoader;
