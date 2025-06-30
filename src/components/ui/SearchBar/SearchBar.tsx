'use client';

import { 
  Input,
  Flex,
  Select,
  Portal,
  ListCollection,
} from '@chakra-ui/react';
import { MediaSort } from '@/graphql/anilist';
import React from 'react';

interface SortOption {
  label: string;
  value: MediaSort;
}

export interface SearchBarProps {
  searchTerm: string
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  sortValue: MediaSort
  onSortChange: (value: MediaSort) => void
  sortOptions: ListCollection<SortOption>
}

export function SearchBar({ 
  searchTerm, 
  onSearchChange, 
  sortValue, 
  onSortChange,
  sortOptions 
}: SearchBarProps) {
  // Create unique IDs for accessibility
  const searchInputId = "anime-search-input";
  const sortSelectId = "sort-select";
  
  return (
    <Flex 
      mb={{ base: 4, md: 6 }} 
      gap={4} 
      flexWrap="wrap" 
      p={{ base: 3, md: 4 }} 
      bg="white" 
      borderRadius="md" 
      boxShadow="sm" 
      borderWidth="1px" 
      borderColor="primary.100"
      align={{ base: "stretch", md: "center" }}
    >
      <Input
        id={searchInputId}
        name="anime-search"
        placeholder="Search anime..."
        value={searchTerm}
        onChange={onSearchChange}
        maxW={{ base: "100%", md: "400px" }}
        px={1}
        bg="white"
        color="primary.700"
        _placeholder={{ color: 'gray.400' }}
        borderColor="primary.200"
        _focus={{ borderColor: "primary.400", boxShadow: "0 0 0 1px var(--chakra-colors-primary-400)" }}
        aria-label="Search anime"
      />
      
      <Select.Root
        collection={sortOptions}
        size="sm"
        width="200px"
        value={[sortValue]}
        onValueChange={(detail) => onSortChange(detail.value[0] as MediaSort)}
        id={sortSelectId}
      >
        <Select.HiddenSelect aria-label="Sort anime by" />
        <Select.Control>
          <Select.Trigger
            bg="white"
            borderColor="primary.200"
            borderWidth="1px"
            borderRadius="md"
            color="primary.700"
            _focus={{ borderColor: "primary.400", boxShadow: "0 0 0 1px var(--chakra-colors-primary-400)" }}
            w="100%"
            px={1}
          >
            <Select.ValueText placeholder="Sort by" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content p={2}>
              {sortOptions.items.map((option) => (
                <Select.Item key={option.value} item={option} color="primary.700">
                  {option.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </Flex>
  );
} 