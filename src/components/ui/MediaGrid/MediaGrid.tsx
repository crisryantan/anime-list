'use client';

import { SimpleGrid } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export interface MediaGridProps {
  children: ReactNode
  ariaLabel?: string
}

export function MediaGrid({ children, ariaLabel = "Media content grid" }: MediaGridProps) {
  return (
    <SimpleGrid 
      columns={{ base: 1, sm: 2, md: 4, lg: 6 }} 
      gap={6}
      justifyItems="center"
      role="grid"
      aria-label={ariaLabel}
    >
      {children}
    </SimpleGrid>
  );
} 