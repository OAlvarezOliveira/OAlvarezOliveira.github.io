import { Box, Flex, Heading, Text, Image, Button, Stack } from "@chakra-ui/react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <Box id="about" py={10} px={5}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={10}
      >
        <Image
          src="/Foto Oscar.jpg"
          alt="Oscar Alvarez Oliveira"
          borderRadius="full"
          boxSize="220px"
          objectFit="cover"
          shadow="lg"
        />

        <Box maxW="xl">
          <Heading mb={4}>Sobre mí</Heading>
          <Text fontSize="lg" color="gray.600" mb={6}>
            Oscar Alvarez Oliveira
            Lorem ipsum dolor sit amet, consectetur adipisici elit, 
            sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquid ex ea commodi consequat. 
            Quis aute iure reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint obcaecat cupiditat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisici elit, 
            sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquid ex ea commodi consequat. 
            Quis aute iure reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint obcaecat cupiditat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <Stack direction="row" spacing={4}>
            <Button
              as="a"
              href="/cv-oscar.pdf"
              target="_blank"
              leftIcon={<FaDownload />}
              colorScheme="blue"
              variant="solid"
            >
              Descargar CV
            </Button>

            <Button
              as="a"
              href="https://github.com/OAlvarezOliveira"
              target="_blank"
              leftIcon={<FaGithub />}
              variant="outline"
            >
              GitHub
            </Button>

            <Button
              as="a"
              href="https://www.linkedin.com/in/oscar-alvarez-oliveira-462877241/"
              target="_blank"
              leftIcon={<FaLinkedin />}
              variant="outline"
              colorScheme="linkedin"
            >
              LinkedIn
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
