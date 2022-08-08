import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import PropertyReview from 'components/listings/PropertyReview/PropertyReview.component';
import { DetailedListing } from 'typings/listings/DetailedListing';

type Props = {
  listing: DetailedListing;
};

const DetailedListingAllReviewsModal = ({ listing }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { number_of_reviews, reviews } = listing;

  return (
    <>
      <Button onClick={onOpen}>View all {number_of_reviews} reviews</Button>
      <Modal
        isOpen={isOpen}
        isCentered
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent m={2} maxWidth={900}>
          <ModalCloseButton top={5} />
          <ModalHeader>
            <Text fontSize={{ base: '2xl', lg: '3xl' }} fontWeight="bold">
              All reviews
            </Text>
          </ModalHeader>
          <ModalBody>
            {reviews?.map((review) =>
              review ? (
                <PropertyReview key={review?._id} review={review} mb={4} />
              ) : null
            )}
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailedListingAllReviewsModal;
