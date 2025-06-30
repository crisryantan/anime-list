'use client';

import {
  Card,
  Box,
  Image,
  Text,
  Badge,
  HStack,
} from '@chakra-ui/react';
import { Media } from '@/types/anilist';
import { useState } from 'react';

export interface MediaCardProps {
  media: Media
  onClick?: () => void
}

export const MediaCard = ({ media, onClick }: MediaCardProps) => {
  const [imageError, setImageError] = useState(false);

  const title = media.title.english || media.title.romaji;
  const description = media.description
    ? media.description.replace(/<[^>]*>/g, '').slice(0, 150) +
      (media.description.length > 150 ? '...' : '')
    : 'No description available';
  const score = media.averageScore ? `${media.averageScore}%` : 'N/A';
  const imageSrc = imageError ? '/placeholder-image.png' : media.coverImage.large;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Card.Root
      w="full"
      maxW="300px"
      borderWidth="1px"
      borderColor="primary.100"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="all 0.2s"
      _hover={{
        transform: 'scale(1.02)',
        cursor: 'pointer',
        boxShadow: 'lg',
      }}
      bg="white"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details of ${title}`}
    >
      <Box pos="relative" pt="130%" overflow="hidden">
        <Image
          src={imageSrc}
          alt={title}
          onError={() => setImageError(true)}
          pos="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          objectFit="cover"
          loading="lazy"
        />
      </Box>

      <Card.Body p={3} display="flex" flexDir="column" h="180px">
        <Card.Title mb={1} fontSize="sm" color="primary.700">
          {title}
        </Card.Title>

        <HStack mb={2} gap={1}>
          {media.genres?.slice(0, 2).map((genre) => (
            <Badge
              key={genre}
              fontSize="xs" 
              colorScheme="primary" 
              bg="primary.50" 
              color="primary.700"
            >
              {genre}
            </Badge>
          ))}
        </HStack>

        <Card.Description flex="1" fontSize="xs" color="gray.600" mb={2}>
          {description}
        </Card.Description>

        <HStack justify="space-between" fontSize="xs" mt="auto" color="gray.500">
          <Text>{media.format || 'Unknown'}</Text>
          <Text>{media.seasonYear || ''}</Text>
          <Badge colorPalette={media.averageScore && media.averageScore > 75 ? 'green' : 'gray'}>
            {score}
          </Badge>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}; 