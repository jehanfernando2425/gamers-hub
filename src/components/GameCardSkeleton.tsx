import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width="300px">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
