import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { AnimatedSection } from '../components/AnimatedSection';
import Initiatives from '../components/Initiatives';
import Head from 'next/head';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Kaivalya Parihar</title>
        <meta name="description" content="Portfolio of Kaivalya Parihar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />

        <AnimatedSection>
          <div id="about">
            <About />
            </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div id="skills">
            <Skills />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div id="projects">
            <Projects />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="certifications">
            <Certifications />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="initiatives">
            <Initiatives />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="contact">
            <Contact />
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
