// src/components/Sidebar.jsx
import {
  Box,
  VStack,
  Link,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useColorModeValue,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Menu } from "lucide-react"; // usa el icono de lucide-react

// Ajusta aquí el orden/etiquetas del menú
const SECTIONS = ["About", "TechStack", "Projects"];

export default function Sidebar({ active, onSelect }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue("gray.50", "gray.900");
  const border = useColorModeValue("gray.200", "gray.700");
  const activeColor = useColorModeValue("blue.600", "blue.300");

  const Item = ({ label }) => (
    <Link
      onClick={() => {
        onSelect(label);
        onClose();
      }}
      fontWeight={active === label ? "bold" : "medium"}
      color={active === label ? activeColor : "inherit"}
      _hover={{ textDecoration: "none", color: activeColor }}
    >
      {label}
    </Link>
  );

  return (
    <>
      {/* Sidebar fijo (desktop) */}
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
        zIndex={1000}
      >
        <VStack align="stretch" spacing={4}>
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            Óscar Álvarez
          </Text>
          {SECTIONS.map((s) => (
            <Item key={s} label={s} />
          ))}
        </VStack>
      </Box>

      {/* Topbar móvil */}
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
              {SECTIONS.map((s) => (
                <Item key={s} label={s} />
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
