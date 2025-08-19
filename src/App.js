import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
