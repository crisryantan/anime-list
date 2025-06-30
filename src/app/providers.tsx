'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@/context/User'
import system from '../theme'
import { getApolloClient } from '@/lib/apollo'

export function Providers({ children }: { children: React.ReactNode }) {  
  return (
    <ChakraProvider value={system}>
      <ApolloProvider client={getApolloClient()}>
        <UserProvider>
          {children}
        </UserProvider>
      </ApolloProvider>
    </ChakraProvider>
  )
} 