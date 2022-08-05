import { CheckIcon } from '@chakra-ui/icons';
import { List, ListIcon, ListItem, useBreakpointValue } from '@chakra-ui/react';
import { PRIMARY_COLOR } from 'styles/styles.contants';
import { DetailedListing } from 'typings/listings/DetailedListing';

type Props = {
  listing: DetailedListing;
};

const DetailedListingAmenities = ({ listing }: Props) => {
  // making this random, because BE doesn't have this field yet
  const columnCount = useBreakpointValue([1, 2, 3, 4]);

  const { amenities } = listing;

  return (
    <List style={{ columnCount }}>
      {amenities?.map((amenity) => (
        <ListItem key={amenity}>
          <ListIcon as={CheckIcon} color={PRIMARY_COLOR} />
          {amenity}
        </ListItem>
      ))}
    </List>
  );
};

export default DetailedListingAmenities;
