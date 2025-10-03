import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        handleLoadingComplete();
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (isLoading) {
    return <Loading onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <Header />
        <main>
          <section id="hero" className="animate-fade-up">
            <Hero />
          </section>
          <div className="animate-fade-up animation-delay-200">
            <Skills />
          </div>
          <div className="animate-fade-up animation-delay-400">
            <Projects />
          </div>
          <div className="animate-fade-up animation-delay-600">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
