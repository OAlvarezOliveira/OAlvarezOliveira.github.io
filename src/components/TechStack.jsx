import {
  Box, Heading, Text, Tabs, TabList, TabPanels, Tab, TabPanel,
  SimpleGrid, VStack, Icon, Link, useColorModeValue
} from "@chakra-ui/react";
import {
  FaJava, FaPython, FaPhp, FaHtml5, FaCss3Alt,
  FaAws, FaDocker, FaGithub, FaGitlab
} from "react-icons/fa";
import {
  SiGooglecloud, SiKubernetes, SiTerraform, SiAnsible, SiJenkins, SiSelenium, SiTestcafe
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { PiFileSqlThin } from "react-icons/pi";
import { DiMysql } from "react-icons/di";

const CATEGORIES = [
  {
    key: "Languages",
    label: "Languages",
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
    key: "Cloud",
    label: "Cloud Platforms",
    items: [
      { name: "AWS", icon: FaAws, url: "https://aws.amazon.com/" },
      { name: "Azure", icon: VscAzure, url: "https://azure.microsoft.com/" },
      { name: "GCP", icon: SiGooglecloud, url: "https://cloud.google.com/" },
    ],
  },
  {
    key: "DevOps",
    label: "DevOps & Automation",
    items: [
      { name: "Docker", icon: FaDocker, url: "https://www.docker.com/" },
      { name: "Kubernetes", icon: SiKubernetes, url: "https://kubernetes.io/" },
      { name: "Terraform", icon: SiTerraform, url: "https://www.terraform.io/" },
      { name: "Ansible", icon: SiAnsible, url: "https://www.ansible.com/" },
      { name: "Jenkins", icon: SiJenkins, url: "https://www.jenkins.io/" },
    ],
  },
  {
    key: "Testing",
    label: "Testing",
    items: [
      { name: "Selenium", icon: SiSelenium, url: "https://www.selenium.dev/" },
      { name: "TestNG", icon: SiTestcafe, url: "https://testng.org/" }, // placeholder acordado
    ],
  },
  {
    key: "Tools",
    label: "Tools & Others",
    items: [
      { name: "GitHub", icon: FaGithub, url: "https://github.com/" },
      { name: "GitLab", icon: FaGitlab, url: "https://about.gitlab.com/" },
      { name: "MySQL", icon: DiMysql, url: "https://www.mysql.com/" },
    ],
  },
];

export default function TechStack() {
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");
  const hoverBg = useColorModeValue("teal.50", "gray.700");

  return (
    <Box id="techstack" px={{ base: 4, md: 8 }} py={10} maxW="1000px" mx="auto">
      <Heading mb={2}>Tech Stack</Heading>
      <Text mb={8} color="gray.500">
        Estas son algunas de las tecnologías con las que trabajo a diario. Siempre aprendiendo y actualizando mi stack.
      </Text>

      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList overflowX="auto" pb={2}>
          {CATEGORIES.map(c => (
            <Tab key={c.key} mr={2}>{c.label}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {CATEGORIES.map(c => (
            <TabPanel key={c.key} px={0}>
              <SimpleGrid columns={[2, 3, 4]} spacing={5}>
                {c.items.map(item => (
                  <Link
                    key={item.name}
                    href={item.url}
                    isExternal
                    _hover={{ textDecoration: "none" }}
                  >
                    <VStack
                      bg={cardBg}
                      border="1px solid"
                      borderColor={cardBorder}
                      borderRadius="md"
                      p={4}
                      spacing={2}
                      align="center"
                      transition="all .2s ease"
                      _hover={{ bg: hoverBg, transform: "translateY(-2px)" }}
                    >
                      {item.icon && <Icon as={item.icon} w={6} h={6} color="teal.500" />}
                      <Text fontSize="sm" textAlign="center">{item.name}</Text>
                    </VStack>
                  </Link>
                ))}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}
