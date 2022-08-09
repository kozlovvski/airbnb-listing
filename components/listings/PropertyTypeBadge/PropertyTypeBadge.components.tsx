import { Badge, BadgeProps } from '@chakra-ui/react';

import { stringToColor } from './PropertyTypeBadge.helpers';

type Props = BadgeProps & {
  propertyType: string;
};

const PropertyTypeBadge = ({ propertyType, ...badgeProps }: Props) => (
  <Badge color={stringToColor(propertyType)} {...badgeProps}>
    {propertyType}
  </Badge>
);

export default PropertyTypeBadge;
