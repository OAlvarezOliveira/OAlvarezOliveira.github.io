import {
  Box,
  Heading,
  SimpleGrid,
  VStack,
  Icon,
  Text,
  Link,
} from "@chakra-ui/react";
import {
  FaJava,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaDocker,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";
import {
  SiGooglecloud,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiSelenium,
  SiTestcafe,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { PiFileSqlThin } from "react-icons/pi";
import { DiMysql } from "react-icons/di";

const techCategories = [
  {
    title: "Languages",
    items: [
      { name: "Java", icon: FaJava, url: "https://www.java.com/" },
      { name: "Python", icon: FaPython, url: "https://www.python.org/" },
      { name: "PHP", icon: FaPhp, url: "https://www.php.net/" },
      { name: "HTML5", icon: FaHtml5, url: "https://developer.mozilla.org/docs/Web/Guide/HTML/HTML5" },
      { name: "CSS3", icon: FaCss3Alt, url: "https://developer.mozilla.org/docs/Web/CSS" },
      { name: "SQL", icon: PiFileSqlThin, url: "https://www.iso.org/standard/76583.html" },
    ],
  },
  {
    title: "Cloud Platforms",
    items: [
      { name: "AWS", icon: FaAws, url: "https://aws.amazon.com/" },
      { name: "Azure", icon: VscAzure, url: "https://azure.microsoft.com/" },
    ],
  },
  {
    title: "DevOps & Automation",
    items: [
      { name: "Docker", icon: FaDocker, url: "https://www.docker.com/" },
      { name: "Kubernetes", icon: SiKubernetes, url: "https://kubernetes.io/" },
      { name: "Terraform", icon: SiTerraform, url: "https://www.terraform.io/" },
      { name: "Ansible", icon: SiAnsible, url: "https://www.ansible.com/" },
      { name: "Jenkins", icon: SiJenkins, url: "https://www.jenkins.io/" },
    ],
  },
  {
    title: "Testing",
    items: [
      { name: "Selenium", icon: SiSelenium, url: "https://www.selenium.dev/" },
      { name: "TestNG", icon: SiTestcafe, url: "https://testng.org/" },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      { name: "GitHub", icon: FaGithub, url: "https://github.com/" },
      { name: "GitLab", icon: FaGitlab, url: "https://about.gitlab.com/" },
      { name: "MySQL", icon: DiMysql, url: "https://www.mysql.com/" },
    ],
  },
];

export default function TechStack() {
  return (
    <Box p={8} maxW="1000px" mx="auto">
      <VStack spacing={10} align="start">
        <Heading size="xl">Tech Stack</Heading>
        {techCategories.map((category) => (
          <Box key={category.title} w="100%">
            <Heading size="md" mb={4}>
              {category.title}
            </Heading>
            <SimpleGrid columns={[2, 3, 5]} spacing={5}>
              {category.items.map((tech) => (
                <Link
                  key={tech.name}
                  href={tech.url}
                  isExternal
                  _hover={{ textDecoration: "none" }}
                >
                  <VStack
                    spacing={2}
                    align="center"
                    borderWidth="1px"
                    borderRadius="md"
                    p={4}
                    _hover={{ bg: "teal.50", transform: "scale(1.05)" }}
                    transition="all 0.2s ease-in-out"
                  >
                    {tech.icon ? (
                      <Icon as={tech.icon} w={10} h={10} color="teal.500" />
                    ) : null}
                    <Text>{tech.name}</Text>
                  </VStack>
                </Link>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
