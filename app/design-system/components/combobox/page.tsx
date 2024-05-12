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
import CodeBlock from '@/components/ui/CodeBlock';
import Link from 'next/link';

const componentCode = `<BooksComboxbox />`;

const Component = () => (
  <div className="flex flex-row items-center justify-center gap-2 py-8">
    <BooksComboxbox />
  </div>
);

const comboboxInModalCode = `<Modal modal={false}>
    <ModalTrigger asChild>
      <Button variant="outline" className="mt-4">
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
  </Modal>`;

const ComboboxInModalComponent = () => (
  <div className="flex flex-row items-center justify-center gap-2 py-8">
    <Modal modal={false}>
      <ModalTrigger asChild>
        <Button variant="outline" className="mt-4">
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
);

const ComboboxPage = () => (
  <ComponentDocsPageTemplate title="Combobox" path="/combobox">
    <div className="flex flex-col gap-16 pb-12">
      <div className="flex flex-col gap-4">
        <Text variant="headline" size="2xl" as="h2">
          Regular Combobox
        </Text>
        <div className="container mx-auto">
          <CodeBlock
            aria-label="Hello world"
            language="html"
            component={<Component />}
          >
            {componentCode}
          </CodeBlock>
        </div>
        <Text variant="body" size="sm" className="text-text-secondary">
          We create custom comboboxes for each use case. Right now, we don't
          have a combobox component because of the nature of the{' '}
          <Link
            href="https://www.downshift-js.com/downshift/"
            target="_blank"
            className="text-baby-blue-700"
          >
            Downshift
          </Link>{' '}
          APIs
        </Text>
      </div>
      <div className="flex flex-col gap-4">
        <Text variant="headline" size="2xl" as="h2">
          Rendering a Combobox inside of a modal/dialog
        </Text>
        <div className="container mx-auto">
          <CodeBlock
            aria-label="Hello world"
            language="html"
            component={<ComboboxInModalComponent />}
          >
            {comboboxInModalCode}
          </CodeBlock>
        </div>
        <Text variant="body" size="sm" className="text-text-secondary">
          To use inside a modal we make sure that the combobox's{' '}
          <code>PopoverContent</code> does NOT have the <code>forceMount</code>{' '}
          prop enabled and we add the <code>allowScrollOverlay</code> to the
          parent modal's <code>ModalContent</code>
        </Text>
      </div>
    </div>
  </ComponentDocsPageTemplate>
);

export default ComboboxPage;
