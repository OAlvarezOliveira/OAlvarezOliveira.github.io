// src/components/Projects.jsx
import {
  Box, Heading, Text, SimpleGrid, Stack, Link, Badge, useColorModeValue
} from "@chakra-ui/react";

const projects = [
  {
    title: "ToDo List (AWS SAM + Jenkins)",
    desc:
      "API REST de tareas con AWS SAM y pipelines Jenkins para CI/CD. Despliegue, tests y config local con DynamoDB.",
    tags: ["AWS", "SAM", "Jenkins", "Python", "CI/CD", "DynamoDB"],
    url: "https://github.com/OAlvarezOliveira/todo-list-aws",
  },
  {
    title: "Infra & Deploy en Azure",
    desc:
      "Infra automatizada en Azure con Terraform + Ansible, contenedores con Podman, AKS y almacenamiento persistente.",
    tags: ["Azure", "Terraform", "Ansible", "AKS", "Podman", "K8s"],
    url: "https://github.com/OAlvarezOliveira/casopractico2",
  },
];

export default function Projects() {
  const cardBg = useColorModeValue("white", "gray.800");
  const border = useColorModeValue("gray.200", "gray.700");
  const hoverBg = useColorModeValue("teal.50", "gray.700");

  return (
    <Box id="projects" px={{ base: 4, md: 8 }} py={10} maxW="1000px" mx="auto">
      <Heading mb={2}>Projects</Heading>
      <Text mb={8} color="gray.500">
        Algunos proyectos seleccionados en cloud, DevOps y automatización.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {projects.map((p) => (
          <Link
            key={p.title}
            href={p.url}
            isExternal
            _hover={{ textDecoration: "none" }}
          >
            <Stack
              spacing={3}
              p={5}
              border="1px solid"
              borderColor={border}
              borderRadius="lg"
              bg={cardBg}
              transition="all .2s ease"
              _hover={{ bg: hoverBg, transform: "translateY(-2px)" }}
            >
              <Heading size="md">{p.title}</Heading>
              <Text fontSize="sm" color="gray.500">{p.desc}</Text>
              <Stack direction="row" wrap="wrap" gap={2}>
                {p.tags.map((t) => (
                  <Badge key={t} variant="subtle" colorScheme="blue">
                    {t}
                  </Badge>
                ))}
              </Stack>
            </Stack>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
}
