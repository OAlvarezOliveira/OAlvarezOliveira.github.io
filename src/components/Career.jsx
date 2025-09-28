import { Box, Heading, VStack, Text } from "@chakra-ui/react";

export default function Career() {
  return (
    <Box id="career" py={12} px={6} maxW="1000px" mx="auto">
      <Heading mb={6}>Career</Heading>
      <VStack align="start" spacing={4}>
        <Text fontWeight="bold">Primux Trading SL — Responsable de Postventa (2013 - Actualidad)</Text>
        <Text>Automatización, KPIs, liderazgo de soporte, herramientas internas en Python.</Text>
        <Text fontWeight="bold">Egatel SL — Diseño HW / Soporte IT / Calidad (2007 - 2012)</Text>
        <Text>Transmisores TV digital, soporte interno, procesos de calidad.</Text>
      </VStack>
    </Box>
  );
}
