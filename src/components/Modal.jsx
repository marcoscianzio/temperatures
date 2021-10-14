import { Button } from "@chakra-ui/button";
import { Stack, Text } from "@chakra-ui/layout";
import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React from "react";

export const Modal = ({ isOpen, onClose, data }) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>INFORMACIÓN</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {data && (
            <Stack>
              <Text>Maxima temperatura ingresada: {data.max}</Text>
              <Text>Minima temperatura ingresada: {data.min}</Text>
              <Text>Promedio de temperaturas ingresadas: {data.average}</Text>
            </Stack>
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};
