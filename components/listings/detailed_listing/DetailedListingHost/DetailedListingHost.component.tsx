import { Avatar, AvatarBadge, Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { DetailedListing } from 'typings/listings/DetailedListing';

type Props = {
  listing: DetailedListing;
};

const DetailedListingHost = ({ listing }: Props) => {
  // making this random, because BE doesn't have this field yet
  const [isActive] = useState(Math.random() < 0.5);

  const { room_type, host, property_type } = listing;
  const location = host?.host_location;
  const hostName = host?.host_name;
  const hostImg = host?.host_thumbnail_url;

  return (
    <Flex align="center">
      {hostImg && (
        <Avatar src={hostImg}>
          {isActive && <AvatarBadge bg="green.400" boxSize="1.25em" />}
        </Avatar>
      )}
      <Box ml={4}>
        {location && <Text fontSize="sm">{location}</Text>}
        <Text fontSize="lg" fontWeight="semibold">
          {room_type} in {property_type} hosted by {hostName}
        </Text>
      </Box>
    </Flex>
  );
};

export default DetailedListingHost;
