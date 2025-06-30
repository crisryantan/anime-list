'use client'

import { Button } from '@chakra-ui/react'
import React from 'react'

export interface SubmitButtonProps {
  isProfileComplete: boolean
}

export function SubmitButton({ isProfileComplete }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      size="lg"
      width="full"
      mt={4}
      colorScheme="primary"
    >
      {isProfileComplete ? 'Update Profile' : 'Create Profile'}
    </Button>
  )
} 