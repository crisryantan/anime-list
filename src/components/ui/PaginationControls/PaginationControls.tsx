'use client';

import { 
  Flex,
  ButtonGroup,
  IconButton,
  Pagination,
  VisuallyHidden,
  Icon,
} from '@chakra-ui/react';
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
              <Icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </Icon>
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
              <Icon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </Icon>
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Flex>
  );
} 