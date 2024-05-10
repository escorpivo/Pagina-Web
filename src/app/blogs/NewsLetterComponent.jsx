"use client";
import { useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  useDisclosure,
  ModalHeader,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { subscribeToNewsletter } from "../../utils/utils";

export default function NewsLetterComponent() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("initial");
  const [error, setError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex>
        <Container maxW={["sm", "md", "lg"]} rounded={"lg"} p={6}>
          <Heading
            as={"h2"}
            fontSize={{ base: "lg", sm: "xl" }}
            textAlign={"center"}
            mb={5}
          >
            pondré aqui un Newsletter
          </Heading>
          <Stack
            direction={{ base: "column", md: "row" }}
            as={"form"}
            spacing={"12px"}
            onSubmit={async (e) => {
              e.preventDefault();
              setError(false);
              setState("submitting");
              subscribeToNewsletter(email)
                .then((response) => {
                  setState(response.result);
                  onOpen(true);
                })
                .catch((error) => {
                  setError(true);
                  setState("initial");
                  console.error("ha ocurrido un error:", error);
                });
            }}
          >
            <FormControl>
              <Input
                variant={"solid"}
                borderWidth={1}
                color={"gray.800"}
                _placeholder={{
                  color: "gray.400",
                }}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                id={"email"}
                type={"email"}
                required
                placeholder={"Tu email"}
                aria-label={"Tu email"}
                value={email}
                disabled={state !== "initial"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl w={{ base: "100%", md: "40%" }}>
              <Button
                colorScheme={state === "success" ? "green" : "blue"}
                isLoading={state === "submitting"}
                w="100%"
                type={state === "success" ? "button" : "submit"}
              >
                {state === "success" ? <CheckIcon /> : "Submit"}
              </Button>
            </FormControl>
          </Stack>
          <Text
            mt={2}
            textAlign={"center"}
            color={error ? "red.500" : "gray.500"}
          >
            {error
              ? "Oh no, ¡ha ocurrido un error! 😢 Inténtalo en un rato."
              : "¡No recibirás SPAM! lo juro. ✌️"}
          </Text>
        </Container>
      </Flex>
      
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={["xs", "md", "lg"]}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Gracias por suscribirte!</ModalHeader>
          <ModalBody padding="1rem">
          Vas a recibir una confirmación por email.
              on <Text color="#068FFF" display="inline">{email}</Text>. Por favor, confirma el email, para recibir los cambios y tal.
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
