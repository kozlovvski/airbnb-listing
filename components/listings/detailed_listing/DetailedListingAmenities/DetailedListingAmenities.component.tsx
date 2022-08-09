import { CheckIcon } from '@chakra-ui/icons';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { PRIMARY_COLOR } from 'styles/styles.contants';
import { DetailedListing } from 'typings/listings/DetailedListing';

type Props = {
  listing: DetailedListing;
};

const DetailedListingAmenities = ({ listing }: Props) => {
  const { amenities } = listing;

  return (
    <List
      display="grid"
      columnGap={4}
      gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
    >
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
