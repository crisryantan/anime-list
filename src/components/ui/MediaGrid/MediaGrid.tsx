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
      columns={{ base: 1, sm: 2, md: 3, lg: 4 }} 
      gap={6}
      role="grid"
      aria-label={ariaLabel}
    >
      {children}
    </SimpleGrid>
  );
} 