'use client';

import { 
  Flex,
  ButtonGroup,
  IconButton,
  Pagination,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react';

export interface PaginationControlsProps {
  page: number
  totalPages: number
  onPageChange: (newPage: number) => void
}

export function PaginationControls({ page, totalPages, onPageChange }: PaginationControlsProps) {
  return (
    <Flex justify="center" mt={8} mb={4}>
      <Pagination.Root 
        count={totalPages} 
        page={page}
        pageSize={1}
        onPageChange={(e) => onPageChange(e.page)}
      >
        <ButtonGroup variant="outline" size="sm">
          <Pagination.PrevTrigger asChild>
            <IconButton 
              aria-label="Previous page"
              colorScheme="primary"
            >
              <ChevronLeftIcon />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items 
            render={(page) => (
              <IconButton
                aria-label={`Page ${page.value}`}
                variant={{ base: "outline", _selected: "solid" }}
                colorScheme="primary"
              >
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton 
              aria-label="Next page"
              colorScheme="primary"
            >
              <ChevronRightIcon />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Flex>
  );
} 