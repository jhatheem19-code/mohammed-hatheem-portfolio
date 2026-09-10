import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; 
import Projects from "./components/Projects";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;