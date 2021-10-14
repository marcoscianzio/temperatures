import { Accordion, Button, Container, Heading, useDisclosure, useToast } from "@chakra-ui/react";
import { Formik } from "formik";
import { useState } from "react";

import { AccordionItem } from "./components/AccordionItem";
import { Modal } from "./components/Modal";
import { useValues } from "./hooks/useValues";

const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

function App() {
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState();

  const mins = days.reduce((acc, curr) => ((acc[`${curr}Min`] = ""), acc), {});
  const maxs = days.reduce((acc, curr) => ((acc[`${curr}Max`] = ""), acc), {});

  return (
    <Container py={8}>
      <Heading mb={4}>Temperaturas</Heading>
      <Formik
        initialValues={{ maxs, mins }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            const mergedTemperatures = Object.values(Object.assign(values.mins, values.maxs)).map(
              Number
            );

            const { handleMaxMin, handleAverage } = useValues(mergedTemperatures);

            const { min, max } = handleMaxMin(mergedTemperatures);

            const average = handleAverage(mergedTemperatures);

            setData({ min, max, average });
            setSubmitting(false);
            onOpen();
            resetForm();
          }, 400);
        }}
      >
        {({ isValid, isSubmitting }) => (
          <>
            <Accordion allowToggle borderRadius="xl" shadow="lg">
              {days.map((day, index) => (
                <AccordionItem key={index} day={day} />
              ))}
            </Accordion>
            <Button
              isFullWidth
              colorScheme="blue"
              form="submit-form"
              isLoading={isSubmitting}
              mt={4}
              type="submit"
              onClick={() => {
                !isValid &&
                  toast({
                    title: "Tienes un error",
                    description: "¿Dejaste algun campo vacío?",
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  });
              }}
            >
              Enviar
            </Button>
          </>
        )}
      </Formik>
      <Modal data={data} isOpen={isOpen} onClose={onClose} />
    </Container>
  );
}

export default App;
