'use client'

import { Box, Flex, Button, Text } from '@chakra-ui/react'
import { useUser } from '@/context/User'

export function Header() {
	const { userInfo, openProfileModal, isLoading } = useUser()
	
	if (isLoading) {
		return null
	}
	
	return (
        <Box as="header" bg="primary.50" borderBottom="1px" borderColor="primary.100" boxShadow="sm" py={4}>
        <Flex maxW="container.xl" mx="auto" px={4} justify="space-between" align="center">
            <Text fontWeight="bold" fontSize="xl" color="text-primary">Anime List</Text>
            <Flex align="center" gap={4}>
            {userInfo.username && (
                <Box alignItems="center">
                    <Text color="text-primary">
                    <Text as="span" fontWeight="medium" color="text-emphasis">{userInfo.username}</Text>
                    </Text>
                </Box>
            )}
            <Button onClick={openProfileModal} padding={2} colorScheme="primary">
                {userInfo.username ? 'Edit Profile' : 'Create Profile'}
            </Button>
            </Flex>
        </Flex>
        </Box>
	)
} 