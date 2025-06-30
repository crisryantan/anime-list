'use client';

import { Box, Fieldset, Stack, Flex } from '@chakra-ui/react';
import React, { FormEvent } from 'react';
import { FormField } from '@/components/ui/FormField';
import { SubmitButton } from '@/components/ui/SubmitButton';
import { Footer } from '@/components/layout/Footer';

export interface ProfileModalProps {
  formValues: { username: string; jobTitle: string }
  errors: { username?: string; jobTitle?: string }
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: FormEvent) => void
  isEditing: boolean
  isProfileComplete: boolean
}

export function ProfileModal({
  formValues,
  errors,
  onChange,
  onSubmit,
  isEditing,
  isProfileComplete
}: ProfileModalProps) {
  return (
    <Flex
      position="fixed"
      inset={0}
      bg="primary.50" 
      zIndex={1000}
      flexDirection="column"
      height="100vh"
    >
      <Box flex="1" p={4} overflowY="auto">
        <Fieldset.Root
          size="lg"
          maxW="md"
          mx="auto"
          mt={{ base: 12, md: 20 }}
          bg="white"
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          borderWidth="1px"
          borderColor="primary.100"
        >
          <Stack mb={6}>
          <Fieldset.Legend fontSize="lg" fontWeight="bold" color="primary.700">
            {isEditing || isProfileComplete
              ? 'Edit Profile'
              : 'Welcome! Please Create Your Profile'}
          </Fieldset.Legend>

            {!isProfileComplete && !isEditing && (
              <Fieldset.HelperText color="gray.600">
                Please provide your username and job title to continue
              </Fieldset.HelperText>
            )}
          </Stack>

          <form onSubmit={onSubmit}>
            <Fieldset.Content>
              <FormField
                label="Username"
                name="username"
                value={formValues.username}
                error={errors.username}
                onChange={onChange}
                autoComplete="username"
              />
              <FormField
                label="Job Title"
                name="jobTitle"
                value={formValues.jobTitle}
                error={errors.jobTitle}
                onChange={onChange}
                autoComplete="organization-title"
              />
            </Fieldset.Content>

            <SubmitButton isProfileComplete={isProfileComplete} />
          </form>
        </Fieldset.Root>
      </Box>
      <Footer />
    </Flex>
  );
} 