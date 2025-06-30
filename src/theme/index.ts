import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const skyBlueColors = {
  50: { value: '#ebf8ff' },
  100: { value: '#bee3f8' },
  200: { value: '#90cdf4' },
  300: { value: '#63b3ed' },
  400: { value: '#4299e1' },
  500: { value: '#3182ce' }, 
  600: { value: '#2b6cb0' },
  700: { value: '#2c5282' },
  800: { value: '#2a4365' },
  900: { value: '#1a365d' }, 
}

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: skyBlueColors,
      },
      fonts: {
        heading: { value: 'var(--font-geist-sans), sans-serif' },
        body: { value: 'var(--font-geist-sans), sans-serif' },
        mono: { value: 'var(--font-geist-mono), monospace' },
      },
      radii: {
        base: { value: '0.375rem' },
      },
    },
    semanticTokens: {
      colors: {
        'chakra-body-bg': { value: '{colors.primary.50}' },
        'chakra-body-text': { value: '{colors.gray.700}' },
        'chakra-brand': { value: '{colors.primary.500}' },
        'app-header-bg': { value: 'white' },
        'card-bg': { value: 'white' },
        'card-border-color': { value: '{colors.primary.100}' },
        'text-primary': { value: '{colors.primary.700}' },
        'text-secondary': { value: '{colors.primary.600}' },
        'text-muted': { value: '{colors.gray.600}' },
        'text-emphasis': { value: '{colors.primary.800}' },
        'text-headings': { value: '{colors.primary.700}' },
        'text-metadata': { value: '{colors.primary.600}' },
      },
    },
  },
  globalCss: {
    body: {
      bg: 'chakra-body-bg',
      color: 'text-primary',
    },
    'button, a': {
      _hover: {
        cursor: 'pointer',
      },
    },
    'button[data-theme]': {
      colorPalette: 'primary',
    },
  },
})

const system = createSystem(defaultConfig, config)
export default system 