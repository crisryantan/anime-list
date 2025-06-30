import { Box, Text, Flex, Badge } from '@chakra-ui/react';
import { Media } from '@/types/anilist';
import { TEXT_STYLES } from './styles';

interface InfoBlockProps {
  media: Media
}

export const InfoBlock = ({ media }: InfoBlockProps) => {
  return (
    <>
      <Box>
        <Text {...TEXT_STYLES.sectionTitle}>Alternative Titles</Text>
        <Text {...TEXT_STYLES.bodyText}>English: {media.title.english || 'N/A'}</Text>
        <Text {...TEXT_STYLES.bodyText}>Native: {media.title.native || 'N/A'}</Text>
      </Box>
      
      <Box>
        <Text {...TEXT_STYLES.sectionTitle}>Information</Text>
        <Flex gap={2} flexWrap="wrap" mb={{ base: 2, md: 3 }}>
          {media.genres.map((genre) => (
            <Badge 
              key={genre} 
              colorScheme="primary" 
              bg="primary.50" 
              color="primary.700"
              px={2} 
              py={0.5} 
              borderRadius="md"
              fontSize={{ base: 'xs', md: 'xs' }}
            >
              {genre}
            </Badge>
          ))}
        </Flex>
        <Text mt={2} {...TEXT_STYLES.bodyText}>Episodes: {media.episodes || 'Unknown'}</Text>
        <Text {...TEXT_STYLES.bodyText}>Status: {media.status}</Text>
        <Text {...TEXT_STYLES.bodyText}>Score: {media.averageScore ? (media.averageScore / 10) : 'N/A'} / 10</Text>
        <Text {...TEXT_STYLES.bodyText}>Popularity: {media.popularity}</Text>
      </Box>
    </>
  );
}; 