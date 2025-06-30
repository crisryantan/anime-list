'use client';

import { Box, Text, Icon } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import React from 'react';

export interface ErrorStateProps {
  message: string
}

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <Box 
      p={4} 
      bg="red.50" 
      color="red.500" 
      borderRadius="md" 
      border="1px" 
      borderColor="red.300"
      role="alert"
      aria-live="assertive"
      display="flex"
      alignItems="center"
      gap={2}
    >
      <Icon as={WarningIcon} />
      <Text>Error loading data: {message}</Text>
    </Box>
  );
} 