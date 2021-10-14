import {
  AccordionItem as ChakraAccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { InputLeftElement, InputRightAddon } from "@chakra-ui/input";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Form } from "formik";
import React from "react";

import { validate } from "../helpers/validate";

import { Field } from "./Field";

export const AccordionItem = ({ day }) => {
  return (
    <ChakraAccordionItem borderTopWidth={0}>
      <h2>
        <AccordionButton py={6}>
          <Box flex="1" fontWeight="bold" textAlign="left">
            <Stack>
              <Text>{day}</Text>
            </Stack>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Form id="submit-form">
          <Stack>
            <Field
              label="Temperatura maxima"
              name={`maxs.${day}Max`}
              placeholder="ej. 33"
              validate={validate}
              value={`maxs.${day}Max`}
            >
              <InputLeftElement children={<SunIcon color="gray.300" />} pointerEvents="none" />
              <InputRightAddon children="º" />
            </Field>
            <Field
              label="Temperatura minima"
              name={`mins.${day}Min`}
              placeholder="ej. 1"
              validate={validate}
              value={`mins.${day}Min`}
            >
              <InputLeftElement children={<MoonIcon color="gray.300" />} pointerEvents="none" />
              <InputRightAddon children="º" />
            </Field>
          </Stack>
        </Form>
      </AccordionPanel>
    </ChakraAccordionItem>
  );
};
