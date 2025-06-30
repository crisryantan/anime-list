import { useMemo } from 'react';
import { createListCollection } from '@chakra-ui/react';
import { MediaSort } from '@/graphql/anilist';

export const sortOptions = [
  { label: 'Popular', value: MediaSort.POPULARITY_DESC },
  { label: 'Top Rated', value: MediaSort.SCORE_DESC },
  { label: 'Trending', value: MediaSort.TRENDING_DESC },
  { label: 'Recently Updated', value: MediaSort.UPDATED_AT_DESC },
  { label: 'Newest', value: MediaSort.START_DATE_DESC },
];

export function useMediaSortOptions() {
  const sortCollection = useMemo(
    () => createListCollection({ items: sortOptions }),
    []
  );
  
  return sortCollection;
} 