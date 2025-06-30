import { Dialog, Button } from '@chakra-ui/react'
import { DIALOG_STYLES } from './styles'

interface DialogFooterProps {
  onClose: () => void
}

export const DialogFooter = ({ onClose }: DialogFooterProps) => {
  return (
    <Dialog.Footer {...DIALOG_STYLES.footer}>
      <Button 
        colorScheme="primary" 
        onClick={onClose}
        size={{ base: "sm", md: "md" }}
        px={{ base: 4, md: 6 }}
      >
        Close
      </Button>
    </Dialog.Footer>
  )
} 