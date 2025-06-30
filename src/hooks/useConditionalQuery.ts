'use client';

import { DocumentNode, TypedDocumentNode, OperationVariables, QueryHookOptions, useQuery } from '@apollo/client';
import { useUser } from '@/context/User';

// Note: This hook is a wrapper around Apollo's useQuery that automatically skips queries when the user profile
// is incomplete or still loading. Useful for preventing unnecessary API calls.
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