'use client';

import { InformationPage as InformationContent } from '@/components/features/information';
import { LoadingState } from '@/components/ui/LoadingState';
import { Box } from '@chakra-ui/react';
import { Suspense } from 'react';

export default function InformationPage() {
  return (
    <Suspense fallback={
      <Box minH="100vh" display="flex" flexDirection="column" bg="primary.50">
        <LoadingState />
      </Box>
    }>
      <InformationContent />
    </Suspense>
  );
} 