import { Grid, Text } from '@chakra-ui/react';
import PropertyRating from 'components/listings/PropertyRating/PropertyRating.component';
import PropertyReview from 'components/listings/PropertyReview/PropertyReview.component';
import range from 'lodash/range';
import { DetailedListing } from 'typings/listings/DetailedListing';

import DetailedListingAllReviewsModal from './DetailedListingAllReviewsModal.component';

type Props = {
  listing: DetailedListing;
};

const DetailedListingReviews = ({ listing }: Props) => {
  const { number_of_reviews, review_scores, reviews } = listing;

  if (number_of_reviews === 0 || !Array.isArray(reviews)) {
    return (
      <div>
        <Text fontSize={{ base: 'lg', lg: 'xl' }} fontWeight="bold">
          No reviews yet
        </Text>
      </div>
    );
  }

  return (
    <div>
      <PropertyRating
        score={review_scores?.review_scores_rating}
        fontSize="lg"
        fontWeight="bold"
        mb={4}
        endAdornment={
          number_of_reviews ? (
            <>
              <Text as="span" fontWeight="normal" fontSize="md">
                {' based on '}
              </Text>
              {number_of_reviews} review{number_of_reviews > 1 && 's'}
            </>
          ) : undefined
        }
      />
      <Grid
        alignItems="start"
        gridTemplateColumns="repeat(auto-fill, minmax(400px, 1fr))"
        gap={6}
        mb={4}
      >
        {range(0, 6).map((index) => {
          const review = reviews[index];
          return review && <PropertyReview key={review?._id} review={review} />;
        })}
      </Grid>
      {reviews.length > 6 && (
        <DetailedListingAllReviewsModal listing={listing} />
      )}
    </div>
  );
};

export default DetailedListingReviews;
