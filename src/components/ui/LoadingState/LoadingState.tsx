'use client'

import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'

export function LoadingState() {
  return (
    <Center py={20}>
      <Spinner size="xl" />
    </Center>
  )
} 