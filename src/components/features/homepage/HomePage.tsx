'use client';

import { 
  Box, 
  Container, 
  Text, 
  Flex,
  Button,
} from '@chakra-ui/react';
import { UserGate } from '@/components/features/auth';
import { Header } from '@/components/layout/Header';
import { useRouter } from 'next/navigation';

export function HomePage() {
  const router = useRouter();
  
  const goToInformationPage = () => {
    router.push('/information');
  };
  
  return (
    <UserGate>
      <Box minH="100vh" display="flex" flexDirection="column" bg="primary.50">
        <Header />
        <Box flex="1" display="flex" alignItems="center" justifyContent="center">
          <Container maxW="container.xl" py={{ base: 4, md: 8 }}>
            <Flex
              direction="column"
              align="center"
              justify="center"
              minH={{ base: "unset", md: "calc(100vh - 120px)" }}
              gap={8}
              w="full"
            >
              <Box
                textAlign="center"
                py={{ base: 8, md: 12 }}
                maxW="800px"
                w={{ base: "100%", md: "auto" }}
                bg="white"
                borderRadius="xl"
                boxShadow="md"
                px={{ base: 4, md: 8 }}
                borderWidth="1px"
                borderColor="primary.100"
                mx="auto"
              >
                <Text fontSize={{ base: "lg", md: "xl" }} color="text-secondary" mb={10}>
                  You have successfully signed in
                </Text>

                <Flex direction="column" gap={6} align="center">
                  <Text color="text-muted">
                    Check out our anime and manga collection using AniList GraphQL API
                  </Text>
                  <Button
                    onClick={goToInformationPage}
                    colorScheme="primary"
                    size="lg"
                    px={10}
                    borderRadius="md"
                  >
                    View Anime Collection
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
    </UserGate>
  );
} 