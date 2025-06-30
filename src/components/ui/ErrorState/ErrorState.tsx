'use client'

import { Box } from '@chakra-ui/react'
import React from 'react'

export interface ErrorStateProps {
  message: string
}

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <Box p={4} bg="red.50" color="red.500" borderRadius="md" border="1px" borderColor="red.300">
      Error loading data: {message}
    </Box>
  )
} 