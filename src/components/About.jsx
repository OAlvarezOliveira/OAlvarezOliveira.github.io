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
            Soy Óscar Álvarez Oliveira, un desarrollador especializado en DevOps y Cloud.
            Me apasiona construir soluciones eficientes, automatizar procesos
            y trabajar con tecnologías como Docker, Terraform y Jenkins.
            Me gusta el aprendizaje constante y enfrentar nuevos retos en entornos técnicos dinámicos.
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
