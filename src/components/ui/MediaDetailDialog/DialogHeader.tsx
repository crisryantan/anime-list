import { Dialog, CloseButton } from '@chakra-ui/react';
import { DIALOG_STYLES, TEXT_STYLES } from './styles';

interface DialogHeaderProps {
  title: string
}

export const DialogHeader = ({ title }: DialogHeaderProps) => {
  return (
    <Dialog.Header {...DIALOG_STYLES.header}>
      <Dialog.Title {...TEXT_STYLES.title}>{title}</Dialog.Title>
      <Dialog.CloseTrigger asChild {...DIALOG_STYLES.closeButton}>
        <CloseButton size="sm" color="primary.500" _hover={{ color: "primary.700" }} />
      </Dialog.CloseTrigger>
    </Dialog.Header>
  );
}; 