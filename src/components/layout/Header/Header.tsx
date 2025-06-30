'use client';

import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { useUser } from '@/context/User';
import Link from 'next/link';

export function Header() {
	const { userInfo, openProfileModal, isLoading } = useUser();
	
	if (isLoading) {
		return null;
	}
	
	return (
        <Box as="header" bg="primary.50" borderBottom="1px" borderColor="primary.100" boxShadow="sm" py={4} role="banner">
          <Flex maxW="container.xl" mx="auto" px={4} justify="space-between" align="center">
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Text as="h1" fontWeight="bold" fontSize="xl" color="text-primary" cursor="pointer">Anime List</Text>
              </Link>
              <Flex align="center" gap={4} as="nav" role="navigation">
                {userInfo.username && (
                    <Box alignItems="center">
                        <Text color="text-primary">
                          <Text as="span" fontWeight="medium" color="text-emphasis">{userInfo.username}</Text>
                        </Text>
                    </Box>
                )}
                <Button 
                  onClick={openProfileModal} 
                  padding={2} 
                  colorScheme="primary"
                  aria-label={userInfo.username ? 'Edit Profile' : 'Create Profile'}
                >
                    {userInfo.username ? 'Edit Profile' : 'Create Profile'}
                </Button>
              </Flex>
          </Flex>
        </Box>
	);
} 