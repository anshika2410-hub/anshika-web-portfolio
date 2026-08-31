import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <About />
      <Process />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;