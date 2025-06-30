'use client';

import { InformationPage as InformationContent } from '@/components/features/information';
import { Suspense } from 'react';
import { LoadingState } from '@/components/ui/LoadingState';

export default function InformationPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <InformationContent />
    </Suspense>
  );
} 