// src/App.jsx
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects"; // ← nuevo

const MotionBox = motion(Box);

const views = {
  About: <About />,
  TechStack: <TechStack />,
  Projects: <Projects />, // ← reemplaza Career
};

export default function App() {
  const [active, setActive] = useState("About");
  return (
    <>
      <Sidebar active={active} onSelect={setActive} />
      <Box ml={{ base: 0, md: "240px" }} pt={{ base: "56px", md: 0 }} px={4}>
        <AnimatePresence mode="wait">
          <MotionBox
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {views[active]}
          </MotionBox>
        </AnimatePresence>
      </Box>
    </>
  );
}
