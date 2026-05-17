import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import Projects from "./components/Projects/Project";
import About from "./components/About/About";
import Awards from "./components/Awards/Awards";
import Chatbot from "./components/Chatbot/Chatbot";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import { useLenis } from "./hooks/useLenis";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Initialize Lenis smooth scroll — runs once at app root
  useLenis();

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#0a0a0f" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {/* Fixed UI chrome — scroll progress bar + custom cursor */}
      <ScrollProgress />
      <CustomCursor />

      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Portfolio />
      <Projects />
      <Works />
      <Awards />
      <Contact />
      <Footer />
      <Chatbot darkMode={darkMode} />
    </div>
  );
}

export default App;
