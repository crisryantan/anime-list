'use client';

import { SimpleGrid } from '@chakra-ui/react';
import { MediaCardSkeleton } from '../MediaCardSkeleton';

interface MediaGridSkeletonProps {
  count?: number;
}

export function MediaGridSkeleton({ count = 12 }: MediaGridSkeletonProps) {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 4, lg: 6 }}
      gap={6}
      justifyItems="center"
      role="grid"
      aria-label="Loading media content"
    >
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <MediaCardSkeleton key={index} />
        ))}
    </SimpleGrid>
  );
} 