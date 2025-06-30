'use client';

import { 
  Flex,
  ButtonGroup,
  IconButton,
  Pagination,
  VisuallyHidden,
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
        aria-label="Pagination navigation"
      >
        <VisuallyHidden>
          Page {page} of {totalPages}
        </VisuallyHidden>
        
        <ButtonGroup variant="outline" size="sm" role="group" aria-label="Pagination controls">
          <Pagination.PrevTrigger asChild>
            <IconButton 
              aria-label="Previous page"
              colorScheme="primary"
              disabled={page <= 1}
            >
              <ChevronLeftIcon />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items 
            render={(pageItem) => (
              <IconButton
                aria-label={`Page ${pageItem.value}`}
                aria-current={pageItem.value === page ? "page" : undefined}
                variant={{ base: "outline", _selected: "solid" }}
                colorScheme="primary"
              >
                {pageItem.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton 
              aria-label="Next page"
              colorScheme="primary"
              disabled={page >= totalPages}
            >
              <ChevronRightIcon />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Flex>
  );
} 