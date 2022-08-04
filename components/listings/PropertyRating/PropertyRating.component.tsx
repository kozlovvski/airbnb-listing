import { StarIcon } from '@chakra-ui/icons';
import { Flex, FlexProps, Text } from '@chakra-ui/react';

type Props = FlexProps & {
  score: number | null | undefined;
};

const PropertyRating = ({ score, ...flexProps }: Props) => {
  if (typeof score !== 'number') {
    return null;
  }

  return (
    <Flex align="center" {...flexProps}>
      <StarIcon color={score >= 90 ? 'gold' : 'teal.600'} />
      <Text ml={1} fontWeight="bold">
        {(score / 10).toFixed(1)}
      </Text>
    </Flex>
  );
};

export default PropertyRating;
