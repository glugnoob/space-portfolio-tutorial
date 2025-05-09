import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/home-page";
import ContactPage from "./pages/contact-page";
import ProjectsPage from "./pages/projects-page";
import SkillsPage from "./pages/skills-page";
import Navbar from "./components/nav/navbar";
import { Toaster } from "sonner";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <main>
      {location.pathname !== "/" && <Navbar />}
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </AnimatePresence>
      <Toaster />
    </main>
  );
}

export default App;
