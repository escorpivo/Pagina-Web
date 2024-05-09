"use client";
import React from "react";
import {
  Heading,
  SimpleGrid,
  Image,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";
import InterestsCard from "./InterestsCard";
import { interestsData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Page = () => {
  return (
    <>
      <Center m={5}>
        <Box width="80vw" height="100%">
          <RevealWrapper className="load-hidden" id="about" delay={300}>
            <Heading className="sub-heading" size="md" my={3}>
              ABOUT
            </Heading>
            <SimpleGrid
              columns={[1, null, 2]}
              gap={6}
              fontSize="1.1rem"
              marginBottom="4rem"
              templateColumns={[null, null, "30% 70%"]}
            >
              <Image
                objectFit="shrink"
                src="/images/profile.jpg"
                alt="profile-image"
                width={["20rem", "30rem", "20rem"]}
                height={["20rem", "30rem", "20rem"]}
                marginBottom={["1rem", "1rem", null]}
              />

              <Box textAlign="justify">
                <Heading size="xl" mb={3}>
                  👋 Hey there
                </Heading>
                <br />
                <Text>
                  I&apos;m <span className="name">Víctor</span>, Estudiante de Ingeniería Informática
                  Con mucho interés y pasión por la ciberseguirdad. Quiero especializarme en:{" "}
                  <span className="tech">Pentesting y Análisis Forense</span>, ya que considero
                  que cada día que pasa esto va a ser más importante y, es una forma crucial de
                  proteger mis datos y, los de los demás usuarios, o por lo menos poder saber
                  que les ha pasado. 🫠
                </Text>
                <br />

                <Text>
                  Actualmente estoy estudiando Ingeniería Informática en la universidad de León
                  🤖📲Me interesa mucho la ciberseguridad y, en general, todos lo ámbitos de la misma.🔏
                </Text>

                <br />

              </Box>
            </SimpleGrid>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" id="interests" delay={600}>
            <Heading className="sub-heading" size="md" my={3}>
              INTERESTS
            </Heading>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(270px, 1fr))"
            >
              {interestsData.map((data, index) => {
                return (
                  <InterestsCard
                    interest={data.interest}
                    icon={data.icon}
                    key={index}
                  />
                );
              })}
            </SimpleGrid>
          </RevealWrapper>
        </Box>
      </Center>
    </>
  );
};

export default Page;
