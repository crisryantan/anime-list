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
import { Footer } from '@/components/layout/Footer';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/User';

export function HomePage() {
  const router = useRouter();
  const { userInfo } = useUser();
  
  const goToInformationPage = () => {
    router.push('/information');
  };
  
  return (
    <UserGate>
      <Box minH="100vh" display="flex" flexDirection="column" bg="primary.50">
        <Header />
        <Box flex="1" pt="20px">
          <Container maxW="container.xl" py={{ base: 2, md: 4 }}>
            <Flex
              direction="column"
              align="center"
              justify="flex-start"
              w="full"
              px={4}
            >
              <Box
                textAlign="center"
                px={{ base: 3, md: 8 }}
                py={{ base: 6, md: 12 }}
                maxW="800px"
                w={{ base: "100%", md: "auto" }}
                bg="white"
                borderRadius="xl"
                boxShadow="md"
                borderWidth="1px"
                borderColor="primary.100"
                mx="auto"
              >
                <Text fontSize={{ base: "lg", md: "xl" }} color="text-secondary" mb={2}>
                  You have successfully signed in as {userInfo.username} - {userInfo.jobTitle}
                </Text>

                <Flex direction="column" gap={4} align="center">
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
        <Footer />
      </Box>
    </UserGate>
  );
} 