'use client';

import { useState, useEffect } from 'react';
import { 
  Container,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { useConditionalQuery } from '@/hooks/useConditionalQuery';
import { GET_ANIME_LIST, MediaSort } from '@/graphql/anilist';
import { MediaCard } from '@/components/ui/MediaCard';
import { MediaListResponse, Media } from '@/types/anilist';
import { UserGate } from '@/components/features/auth';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SearchBar } from '@/components/ui/SearchBar';
import { MediaGrid } from '@/components/ui/MediaGrid';
import { MediaGridSkeleton } from '@/components/ui/MediaGridSkeleton';
import { PaginationControls } from '@/components/ui/PaginationControls';
import { ErrorState } from '@/components/ui/ErrorState';
import { EmptyState } from '@/components/ui/EmptyState';
import { MediaDetailDialog } from '@/components/ui/MediaDetailDialog';
import { useDebounce } from '@/hooks/useDebounce';
import { useUrlParams } from '@/hooks/useUrlParams';
import { useMediaSortOptions } from '@/hooks/useMediaSortOptions';

export function InformationPage() {
  const [perPage] = useState(12);
  const sortOptions = useMediaSortOptions();
  const { open: isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
  
  const [filters, updateFilters] = useUrlParams();
  const [inputSearchTerm, setInputSearchTerm] = useState(filters.search);
  const debouncedSearch = useDebounce(inputSearchTerm);
  
  useEffect(() => {
    if (debouncedSearch !== filters.search) {
      updateFilters({ search: debouncedSearch });
    }
  }, [debouncedSearch, filters.search, updateFilters]);
  
  const { data, loading, error } = useConditionalQuery<MediaListResponse>(GET_ANIME_LIST, {
    variables: {
      page: filters.page,
      perPage,
      search: filters.search || undefined,
      sort: [filters.sort],
    },
  });
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearchTerm(e.target.value);
  };
  
  const handlePageChange = (newPage: number) => {
    updateFilters({ page: newPage });
  };

  const handleSortChange = (value: MediaSort) => {
    updateFilters({ sort: value });
  };
  
  const handleMediaClick = (media: Media) => {
    setSelectedMedia(media);
    onOpen();
  };
  
  const mediaItems = data?.Page.media || [];
  const pageInfo = data?.Page.pageInfo;
  const totalPages = pageInfo?.lastPage || 1;
  
  const renderContent = () => {
    if (loading) {
      return <MediaGridSkeleton />;
    }
    
    if (error) {
      return <ErrorState message={error.message} />;
    }
    
    if (mediaItems.length === 0) {
      return <EmptyState />;
    }
    
    return (
      <>
        <MediaGrid>
          {mediaItems.map(media => (
            <MediaCard 
              key={media.id}
              media={media}
              onClick={() => handleMediaClick(media)}
            />
          ))}
        </MediaGrid>
        
        {pageInfo && (
          <PaginationControls 
            page={filters.page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </>
    );
  };
  
  return (
    <UserGate>
      <Box minH="100vh" display="flex" flexDirection="column" bg="primary.50">
        <Header />
        <Box flex="1">
          <Container maxW="100%" py={{ base: 2, md: 6 }} px={{ base: 3, md: 8 }}>
            <SearchBar 
              searchTerm={inputSearchTerm}
              onSearchChange={handleSearchChange}
              sortValue={filters.sort}
              onSortChange={handleSortChange}
              sortOptions={sortOptions}
            />
            
            {renderContent()}
          </Container>
        </Box>
        <Footer />
      </Box>
      
      <MediaDetailDialog 
        media={selectedMedia}
        isOpen={isOpen}
        onClose={onClose}
      />
    </UserGate>
  );
} 