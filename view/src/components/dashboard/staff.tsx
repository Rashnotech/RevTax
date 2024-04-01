import {
    useDisclosure, ModalFooter,
    Modal, ModalContent,
    ModalHeader, ModalCloseButton,
    ModalOverlay, Button, ModalBody } from "@chakra-ui/react";

function ManualClose() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Lorem count={2} />
            </ModalBody>
  
            <ModalFooter>
              <Button variantColor="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }