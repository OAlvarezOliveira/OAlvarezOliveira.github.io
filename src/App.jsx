import { Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Career from "./components/Career";

export default function App() {
  return (
    <>
      <Sidebar />
      {/* margen izquierdo para no solapar el sidebar en desktop
          y padding-top para no solapar el topbar móvil */}
      <Box
        ml={{ base: 0, md: "240px" }}
        pt={{ base: "56px", md: 0 }}
      >
        <About />
        <TechStack />
        <Career />
      </Box>
    </>
  );
}
