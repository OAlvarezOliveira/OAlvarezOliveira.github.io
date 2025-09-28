import {
  Box, VStack, Link, IconButton, Drawer, DrawerOverlay,
  DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody,
  useDisclosure, useColorModeValue, HStack, Text
} from "@chakra-ui/react";
import { Menu } from "lucide-react"; // opcional, viene con lucide-react
import useScrollSpy from "../hooks/useScrollSpy";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "techstack", label: "Tech Stack" },
  { id: "career", label: "Career" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const activeId = useScrollSpy(SECTIONS.map(s => s.id), 120);

  const bg = useColorModeValue("gray.50", "gray.900");
  const border = useColorModeValue("gray.200", "gray.700");
  const active = useColorModeValue("blue.600", "blue.300");

  return (
    <>
      {/* Fixed sidebar desktop */}
      <Box
        position="fixed"
        top="0"
        left="0"
        h="100vh"
        w={{ base: 0, md: "240px" }}
        bg={bg}
        borderRight={{ base: "none", md: "1px solid" }}
        borderColor={border}
        display={{ base: "none", md: "block" }}
        px={4}
        py={6}
      >
        <VStack align="stretch" spacing={4}>
          <Text fontWeight="bold" fontSize="lg" mb={2}>Óscar Álvarez</Text>
          {SECTIONS.map(({ id, label }) => (
            <Link
              key={id}
              onClick={() => scrollTo(id)}
              fontWeight={activeId === id ? "bold" : "medium"}
              color={activeId === id ? active : "inherit"}
              _hover={{ textDecoration: "none", color: active }}
            >
              {label}
            </Link>
          ))}
        </VStack>
      </Box>

      {/* Mobile top bar */}
      <HStack
        position="fixed"
        top="0"
        left="0"
        right="0"
        h="56px"
        px={4}
        bg={bg}
        borderBottom="1px solid"
        borderColor={border}
        display={{ base: "flex", md: "none" }}
        justify="space-between"
        zIndex={1000}
      >
        <Text fontWeight="bold">Óscar Álvarez</Text>
        <IconButton
          aria-label="Abrir menú"
          icon={<Menu size={20} />}
          variant="ghost"
          onClick={onOpen}
        />
      </HStack>

      {/* Drawer móvil */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navegación</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4}>
              {SECTIONS.map(({ id, label }) => (
                <Link
                  key={id}
                  onClick={() => { scrollTo(id); onClose(); }}
                  fontWeight={activeId === id ? "bold" : "medium"}
                  color={activeId === id ? active : "inherit"}
                  _hover={{ textDecoration: "none", color: active }}
                >
                  {label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
