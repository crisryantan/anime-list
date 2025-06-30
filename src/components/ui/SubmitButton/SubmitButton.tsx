'use client';

import { Button } from '@chakra-ui/react';
import React from 'react';

export interface SubmitButtonProps {
  isProfileComplete: boolean
  loading?: boolean
}

export function SubmitButton({ 
  isProfileComplete,
  loading = false 
}: SubmitButtonProps) {
  const buttonText = isProfileComplete ? 'Update Profile' : 'Create Profile';
  
  return (
    <Button
      type="submit"
      size="lg"
      width="full"
      mt={4}
      colorScheme="primary"
      loading={loading}
      loadingText={isProfileComplete ? "Updating..." : "Creating..."}
      aria-label={buttonText}
    >
      {buttonText}
    </Button>
  );
} 