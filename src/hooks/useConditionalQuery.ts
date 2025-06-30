'use client';

import { DocumentNode, OperationVariables, QueryHookOptions, TypedDocumentNode, useQuery } from '@apollo/client';
import { useUser } from '@/context/User';

// This hook conditionally executes Apollo queries based on user profile state
export function useConditionalQuery<TData = any, TVariables extends OperationVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<TData, TVariables>
) {
  const { isProfileComplete, isLoading } = useUser();
  
  const shouldSkip = !isProfileComplete || isLoading;
  
  return useQuery(query, {
    ...options,
    skip: shouldSkip || options?.skip,
  });
} 