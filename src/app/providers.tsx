'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '@/context/User'
import system from '../theme'

export function Providers({ children }: { children: React.ReactNode }) {  
  return (
    <ChakraProvider value={system}>
      <UserProvider>
        {children}
      </UserProvider>
    </ChakraProvider>
  )
} 