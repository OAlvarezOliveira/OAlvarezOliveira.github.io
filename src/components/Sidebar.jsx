// src/components/Sidebar.jsx
import { Box, VStack, Link, IconButton, HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const SECTIONS = ["About", "TechStack", "Projects"];

export default function Sidebar({ active, onSelect }) {
  const [open, setOpen] = useState(false);

  const bg = "gray.50";
  const border = "gray.200";
  const activeColor = "blue.600";

  const Item = ({ label }) => (
    <Link
      onClick={() => {
        onSelect(label);
        setOpen(false);
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
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          icon={open ? <X size={20} /> : <Menu size={20} />}
          variant="ghost"
          onClick={() => setOpen((v) => !v)}
        />
      </HStack>

      {/* Overlay + panel móvil */}
      {open && (
        <>
          <Box
            position="fixed"
            top="56px"
            left="0"
            right="0"
            bottom="0"
            bg="blackAlpha.400"
            onClick={() => setOpen(false)}
            zIndex={999}
          />
          <Box
            position="fixed"
            top="56px"
            left="0"
            w="75%"
            maxW="260px"
            bottom="0"
            bg={bg}
            borderRight="1px solid"
            borderColor={border}
            p={4}
            zIndex={1000}
            boxShadow="md"
          >
            <VStack align="stretch" spacing={4}>
              {SECTIONS.map((s) => (
                <Item key={s} label={s} />
              ))}
            </VStack>
          </Box>
        </>
      )}
    </>
  );
}
