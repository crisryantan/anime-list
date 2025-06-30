'use client';

import { Box, Flex, Text } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box as="footer" bg="primary.50" borderTop="1px" borderColor="primary.100" py={3} mt="auto" role="contentinfo">
      <Flex maxW="container.xl" mx="auto" px={4} justify="center" align="center">
        <Text fontSize="sm" color="text-secondary">Challenge Brief (v3.5)</Text>
      </Flex>
    </Box>
  );
} 