'use client'

import {
  Dialog,
  Portal,
  Box,
  Image,
} from '@chakra-ui/react'
import { Media } from '@/types/anilist'
import { useMemo } from 'react'

import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

import { DIALOG_STYLES, LAYOUT_STYLES } from './styles'

import {
  DialogHeader,
  InfoBlock,
  DescriptionBox,
  DialogFooter
} from './'

export interface MediaDetailDialogProps {
  media: Media | null
  isOpen: boolean
  onClose: () => void
}

export const formatDescription = (html: string): string => {
  if (!html) return 'No description available.'
  
  return html.replace(/<[^>]*>/g, '')
} 

export const MediaDetailDialog = ({ media, isOpen, onClose }: MediaDetailDialogProps) => {
  // Prevents body scrolling when the dialog is open
  useLockBodyScroll(isOpen)
  
  const formattedDescription = useMemo(() => {
    return formatDescription(media?.description || '')
  }, [media?.description])
  
  if (!media) return null
  
  return (
    <Dialog.Root open={isOpen} onOpenChange={() => onClose()} placement="center">
      <Portal>
        <Dialog.Backdrop bg="blackAlpha.600" />
        <Dialog.Positioner>
          <Dialog.Content {...DIALOG_STYLES.content}>
            <DialogHeader title={media.title.romaji} />
            
            <Dialog.Body 
              {...DIALOG_STYLES.body}
            >
              <Box 
                display="flex" 
                flexDir={{ base: "column", md: "row" }}
                gap={{ base: "1rem", md: "2rem" }}
              >
                <Box {...LAYOUT_STYLES.imageContainer}>
                  <Image 
                    src={media.coverImage.large} 
                    alt={media.title.romaji} 
                    borderRadius="md"
                    boxShadow="md"
                    width="full"
                    objectFit="cover"
                    height="auto"
                  />
                </Box>
                
                <Box 
                  display="flex"
                  flexDirection="column"
                  gap={4}
                  flex="1"
                >
                  <InfoBlock media={media} />
                  <DescriptionBox description={formattedDescription} />
                </Box>
              </Box>
            </Dialog.Body>
            
            <DialogFooter onClose={onClose} />
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
} 