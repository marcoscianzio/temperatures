import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { useField } from "formik";

export const Field = ({ children, label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel fontSize="xs" fontWeight="4000">
        {label}
      </FormLabel>
      <InputGroup size="md">
        <Input {...props} {...field} variant="flushed" />
        {children}
      </InputGroup>
      {meta.error ? <FormErrorMessage fontSize="12px"> {meta.error}</FormErrorMessage> : null}
    </FormControl>
  );
};
