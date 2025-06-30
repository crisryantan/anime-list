'use client';

import { Box } from '@chakra-ui/react';
import React from 'react';

export interface EmptyStateProps {
  message?: string
}

export function EmptyState({ message = 'No items found. Try changing your search criteria.' }: EmptyStateProps) {
  return (
    <Box p={4} bg="blue.50" color="blue.500" borderRadius="md" border="1px" borderColor="blue.300">
      {message}
    </Box>
  );
} 