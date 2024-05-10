"use client";
import React from "react";
import {
    Center,
    Box,
    Button
  } from "@chakra-ui/react";
  import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {

  return (
    <>
      <Center>
        <Box width={["90vw", "90vw", "80vw"]} height="100%" marginTop="2rem" marginBottom="4rem">
        <Button as="a" href="/files/Victor Amigo cv.pdf" colorScheme="teal" size="sm" download="Victor_Amigo_Garcia_CV">
              Descargar CV europeo&nbsp;
              <AiOutlineDownload fill="black"/>
        </Button>
        <Button as="a" href="/files/Clean_CV_Victor.pdf" colorScheme="teal" size="sm" download="Victor_Amigo_Garcia_CV_Clean">
              Descargar CV Clean&nbsp;
              <AiOutlineDownload fill="black"/>
        </Button>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "141.4286%",
              paddingBottom: 0,
              boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
              marginTop: "1em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              title="Resume"
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
              }}
              //poner aqui un enlace a un canva o algo
              src="https://www.canva.com/design/DAGEyRQT5Lw/7PIBytYufd9evvPH9HfUUQ/view?embed"
              allowFullScreen
            ></iframe>
          </div>
        </Box>
      </Center>
    </>
  );
};

export default Resume;