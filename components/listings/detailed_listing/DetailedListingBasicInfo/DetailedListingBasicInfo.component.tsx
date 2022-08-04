import { Text } from '@chakra-ui/react';
import PropertyRating from 'components/listings/PropertyRating/PropertyRating.component';
import PropertyTypeBadge from 'components/listings/PropertyTypeBadge/PropertyTypeBadge.components';
import { DetailedListing } from 'typings/listings/DetailedListing';

import DetailedListingMoreInfoModal from './DetailedListingMoreInfoModal.component';

type Props = {
  listing: DetailedListing;
};

const DetailedListingBasicInfo = ({ listing }: Props) => {
  const { summary, name, review_scores, property_type } = listing;

  return (
    <div>
      <Text fontSize={{ base: '2xl', lg: '3xl' }} fontWeight="bold">
        {name}
        {property_type && (
          <PropertyTypeBadge
            display={{ base: 'none', lg: 'inline' }}
            fontSize="md"
            ml={4}
            propertyType={property_type}
          />
        )}
      </Text>
      <PropertyRating score={review_scores?.review_scores_rating} />
      <Text>{summary}</Text>
      <DetailedListingMoreInfoModal listing={listing} />
    </div>
  );
};

export default DetailedListingBasicInfo;
