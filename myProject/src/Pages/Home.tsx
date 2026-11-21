import { useEffect } from 'react';
import './index.css';
import { useLocation } from 'react-router-dom';
import { Hero } from './../component/Hero';
import { Header } from './../component/Header';
import { About } from '../component/About';
import { ProjectDisplay } from '../component/ProjectDisplay';
import { ContactInfo } from '../component/ContactInfo';
import { Footer } from '../component/Footer';
import { Skills } from '../component/Skills';

export function ArrowIcon() {
  return <span aria-hidden="true">&#10132;</span>
}

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== "") {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location]);

  return (
    <>
    <meta name="robots" content="noindex, nofollow" />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectDisplay />
        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}