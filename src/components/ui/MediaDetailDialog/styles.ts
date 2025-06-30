import { SystemStyleObject } from '@chakra-ui/react';

export const DIALOG_STYLES = {
  content: {
    maxW: { base: "95%", sm: "85%", md: "xl" },
    borderRadius: "lg",
    bg: "white",
    boxShadow: "xl",
    overflow: "hidden",
    borderWidth: "1px",
    borderColor: "primary.100",
    maxH: { base: "85vh", md: "auto" }
  } as SystemStyleObject,
  
  header: {
    bg: "primary.50",
    px: { base: 4, md: 6 },
    py: { base: 3, md: 4 },
    borderBottomWidth: "1px",
    borderBottomColor: "primary.100",
    position: "relative"
  } as SystemStyleObject,
  
  body: {
    p: { base: 4, md: 6 },
    maxH: { base: '60vh', md: '70vh' },
    overflowY: "auto"
  } as SystemStyleObject,
  
  footer: {
    px: { base: 4, md: 6 },
    py: { base: 3, md: 4 },
    borderTopWidth: "1px",
    borderTopColor: "primary.100",
    bg: "primary.50",
    justifyContent: "flex-end"
  } as SystemStyleObject,
  
  closeButton: {
    position: "absolute",
    right: { base: 3, md: 4 },
    top: "50%",
    transform: "translateY(-50%)"
  } as SystemStyleObject
};

export const TEXT_STYLES = {
  title: {
    fontWeight: "bold",
    color: "primary.700",
    fontSize: { base: "md", md: "lg" }
  } as SystemStyleObject,
  
  sectionTitle: {
    fontWeight: "bold",
    fontSize: { base: 'sm', md: 'md' },
    color: "primary.700",
    mb: { base: 1, md: 2 }
  } as SystemStyleObject,
  
  bodyText: {
    color: "gray.700",
    fontSize: { base: 'xs', md: 'sm' }
  } as SystemStyleObject
};

export const LAYOUT_STYLES = {
  imageContainer: {
    flexShrink: 0,
    maxW: { base: '140px', md: '220px' },
    mx: { base: 'auto', md: 0 },
    mb: { base: 2, md: 0 }
  } as SystemStyleObject,
  
  contentContainer: {
    gap: { base: 3, md: 5 },
    flex: "1"
  } as SystemStyleObject,
  
  descriptionBox: {
    lineHeight: "tall",
    bg: "gray.50",
    p: { base: 2, md: 3 },
    borderRadius: "md",
    borderWidth: "1px",
    borderColor: "gray.200",
    whiteSpace: "pre-wrap",
    maxH: { base: '25vh', md: 'unset' },
    overflowY: "auto"
  } as SystemStyleObject
}; 