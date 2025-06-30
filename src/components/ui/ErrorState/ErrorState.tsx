'use client';

import { Box, Text, Icon } from '@chakra-ui/react';
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
      <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm0-10h2v8h-2V7z" />
        </svg>
      </Icon>
      <Text>Error loading data: {message}</Text>
    </Box>
  );
} 