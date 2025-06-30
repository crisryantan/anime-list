'use client';

import {
  Box,
  Card,
  Skeleton,
  SkeletonText,
  HStack,
} from '@chakra-ui/react';

export function MediaCardSkeleton() {
  return (
    <Card.Root
      w="full"
      maxW="400px"
      borderWidth="1px"
      borderColor="primary.100"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
    >
      <Box pos="relative" pt="130%" overflow="hidden">
        <Skeleton 
          pos="absolute" 
          top={0} 
          left={0} 
          w="full" 
          h="full"
          css={{
            "--start-color": "colors.gray.100",
            "--end-color": "colors.gray.300"
          }}
        />
      </Box>

      <Card.Body p={3} display="flex" flexDir="column" h="180px">
        <Skeleton height="18px" width="90%" mb={2} />

        <HStack mb={2} gap={1}>
          <Skeleton height="16px" width="60px" />
          <Skeleton height="16px" width="40px" />
        </HStack>

        <Box flex="1" mb={2}>
          <SkeletonText noOfLines={4} gap="2" />
        </Box>

        <HStack justify="space-between" mt="auto">
          <Skeleton height="14px" width="40px" />
          <Skeleton height="14px" width="30px" />
          <Skeleton height="16px" width="40px" />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
} 