import { Box, Text } from '@chakra-ui/react';
import { TEXT_STYLES, LAYOUT_STYLES } from './styles';

interface DescriptionBoxProps {
  description: string
}

export const DescriptionBox = ({ description }: DescriptionBoxProps) => {
  return (
    <Box>
      <Text {...TEXT_STYLES.sectionTitle}>Description</Text>
      <Box 
        {...TEXT_STYLES.bodyText}
        {...LAYOUT_STYLES.descriptionBox}
      >
        {description}
      </Box>
    </Box>
  );
}; 