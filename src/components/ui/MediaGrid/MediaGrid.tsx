'use client'

import { SimpleGrid } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

export interface MediaGridProps {
  children: ReactNode
}

export function MediaGrid({ children }: MediaGridProps) {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
      {children}
    </SimpleGrid>
  )
} 