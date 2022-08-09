import {
  Box,
  BoxProps,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import { ListingReview } from 'typings/listings/ListingReview';

type Props = BoxProps & {
  review: ListingReview;
};

const PropertyReview = ({ review, ...boxProps }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef<HTMLParagraphElement>(null);
  const [showMore, setShowMore] = useState(false);

  useLayoutEffect(() => {
    const elem = ref.current;
    if (!elem) return;

    if (elem.offsetHeight < elem.scrollHeight) {
      setShowMore(true);
    }
  }, []);

  return (
    <ReviewUI review={review} noOfLines={3} ref={ref} {...boxProps}>
      {showMore && (
        <>
          <Button variant="link" textDecor="underline" onClick={onOpen}>
            Show more
          </Button>
          <Modal
            isOpen={isOpen}
            isCentered
            onClose={onClose}
            scrollBehavior="inside"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton top={5} />
              <ModalBody>
                <ReviewUI my={4} review={review} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </ReviewUI>
  );
};

// moving this to a separate component in order to avoid code duplication
const ReviewUI = forwardRef<HTMLParagraphElement, Props>(
  ({ review, noOfLines, children, ...boxProps }, ref) => {
    const { date, comments, reviewer_name } = review;

    return (
      <Box {...boxProps} pl={4} borderLeftColor="gray.300" borderLeftWidth={4}>
        <Text fontWeight="bold">{reviewer_name}</Text>
        <Text fontSize="sm" color="gray.500" mb={2}>
          {new Date(date).toLocaleDateString()}
        </Text>
        <Text noOfLines={noOfLines} ref={ref}>
          {comments}
        </Text>
        {children}
      </Box>
    );
  }
);
ReviewUI.displayName = 'ReviewUI';

export default PropertyReview;
