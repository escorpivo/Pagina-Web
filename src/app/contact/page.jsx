"use client";
import React,{useEffect} from "react";
import ContactForm from "./ContactForm";
import { Heading, Icon, Stack, Text, Tooltip,useDisclosure,Center,SimpleGrid } from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { Link } from "@chakra-ui/next-js";
import SocialIcons from "../../components/SocialIcons";
import MapBox from "./MapBox";
import { RevealWrapper } from 'next-reveal'


const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Center>
      <SimpleGrid my={["5rem","4rem"]} width={["90vw","95vw","85vw"]} templateColumns={[null,null,"40% 55%"]}>
        <RevealWrapper className="load-hidden" delay={300}>
            <Heading fontSize="2.8rem">
              Vamos a hablar sobre{" "}
              <Text color="social.instagram" display="inline">
                cosas
              </Text>{" "}
              guays

            </Heading>

            <br></br>
            <br></br>

            <h4>
            <p color="social.instagram" display="inline">
              Si ves que el formulario da error en fetch, envíame
              un correo directamente con el link de debajo.
              <br></br>
              <br></br>
              -aún tengo la página en desarrollo-
              </p>{" "}
            </h4>
            <br></br>

            <Stack marginTop="4rem">
              <Tooltip label="Send Mail">
                <Link
                  href="mailto:vamigg00@estudiantes.unileon.es"
                  target="_blank"
                  className="contact-text-span"
                  my={3}
                  _hover={{ textDecoration: "none" }}
                >
                  <Icon as={IoIosMail} mx={2} />
                  <Text>vamigg00@estudiantes.unileon.es</Text>
                </Link>
              </Tooltip>

              <Tooltip label="Open Map">
                  <Text className="contact-text-span" my={3} onClick={onOpen} cursor="pointer">
                    <Icon as={ImLocation} mx={2} />
                    <span>León, España</span>
                  </Text>
              </Tooltip>
            </Stack>
            <SocialIcons />
          
        </RevealWrapper>
        <ContactForm />
      </SimpleGrid>
      <MapBox {...{isOpen, onOpen, onClose }}/>
    </Center>
  );
};

export default Contact;
