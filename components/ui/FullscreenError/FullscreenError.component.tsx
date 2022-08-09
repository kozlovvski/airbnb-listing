import { Button, Flex, FlexProps, Text } from '@chakra-ui/react';
import Link from 'next/link';

type SupportedStatus = 404;
type Props = FlexProps & {
  status: SupportedStatus;
};

const getErrorText = (status: SupportedStatus) =>
  ({
    404: 'Page not found',
  }[status]);

const FullscreenError = ({ status, ...flexProps }: Props) => (
  <Flex
    flexDir="column"
    justify="center"
    align="center"
    w="100%"
    minH="100vh"
    {...flexProps}
  >
    <Text>{getErrorText(status)}</Text>
    <Link href="/">
      <Button variant="link">Go back to the main page</Button>
    </Link>
  </Flex>
);

FullscreenError.getErrorText = getErrorText;
export default FullscreenError;
