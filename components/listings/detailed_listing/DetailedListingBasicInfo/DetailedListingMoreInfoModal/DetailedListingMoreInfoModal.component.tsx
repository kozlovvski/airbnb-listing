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
import { formatPrice } from 'helpers/price.helpers';
import { DetailedListing } from 'typings/listings/DetailedListing';

type Props = {
  listing: DetailedListing;
};

const DetailedListingMoreInfoModal = ({ listing }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { description, security_deposit, house_rules } = listing;

  return (
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
        <ModalContent m={2} maxWidth={900}>
          <ModalCloseButton top={5} />
          <ModalHeader>
            <Text fontSize={{ base: '2xl', lg: '3xl' }} fontWeight="bold">
              More info about this place
            </Text>
          </ModalHeader>
          <ModalBody>
            <Text mb={2} fontWeight="bold">
              Description
            </Text>
            <Text>{description}</Text>
            {house_rules && (
              <>
                <Text mt={4} mb={2} fontWeight="bold">
                  House rules
                </Text>
                <Text>{house_rules}</Text>
              </>
            )}
            {Boolean(Number(security_deposit)) && (
              <>
                <Text mt={4} mb={2} fontWeight="bold">
                  Deposit
                </Text>
                <Text>
                  This place requires you to make a deposit of{' '}
                  <strong>{formatPrice(security_deposit)}</strong>. It will be
                  returned in full after the stay if nothing is broken.
                </Text>
              </>
            )}
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailedListingMoreInfoModal;
