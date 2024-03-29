import React from 'react';

import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';
import { Text } from '@/components/ui/Text';
import BooksComboxbox from '@/components/ui/Combobox/BooksCombobox';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

const ComboboxPage = () => (
  <ComponentDocsPageTemplate title="Combobox" path="/combobox">
    <div className="p-8 min-h-[750px] flex flex-col gap-8 items-center justify-center">
      <BooksComboxbox />

      <div>
        <Text> To use inside a modal we pass</Text>
        <Text className="font-mono bg-surface-quaternary text-text-primary p-4 rounded-sm border border-stroke-tertiary my-2">
          <code>{'<PopoverContent className="w-24 h-6" />'}</code>
        </Text>
        <Text> To the combobox's popover, and</Text>
        <Text className="font-mono bg-surface-quaternary text-text-primary p-4 rounded-sm border border-stroke-tertiary my-2">
          <code>{'<ModalContent allowScrollOverlay />'}</code>
        </Text>
        <Text> To the combobox's parent's modal body.</Text>
        <Modal modal={false}>
          <ModalTrigger asChild>
            <Button fullWidth variant="outline" className="mt-4">
              Combobox inside modal{' '}
            </Button>
          </ModalTrigger>
          <ModalContent size="sm" allowScrollOverlay>
            <ModalBody
              size="sm"
              className="flex flex-col gap-4 items-center justify-center"
            >
              Combobox inside a Modal
              <BooksComboxbox />
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  </ComponentDocsPageTemplate>
);

export default ComboboxPage;
