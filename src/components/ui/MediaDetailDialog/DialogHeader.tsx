import { Dialog, CloseButton } from '@chakra-ui/react';
import { DIALOG_STYLES, TEXT_STYLES } from './styles';

interface DialogHeaderProps {
  title: string
}

export const DialogHeader = ({ title }: DialogHeaderProps) => {
  return (
    <Dialog.Header {...DIALOG_STYLES.header}>
      <Dialog.Title id="dialog-title" {...TEXT_STYLES.title}>{title}</Dialog.Title>
      <Dialog.CloseTrigger asChild {...DIALOG_STYLES.closeButton}>
        <CloseButton 
          size="sm" 
          color="primary.500" 
          _hover={{ color: "primary.700" }} 
          aria-label="Close dialog"
        />
      </Dialog.CloseTrigger>
    </Dialog.Header>
  );
}; 