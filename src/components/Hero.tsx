import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-surface-elevated border border-border rounded-full px-4 py-2 mb-8 shadow-elegant">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
            <span className="text-sm font-medium text-muted-foreground">Disponible pour nouveaux projets</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="mb-6 leading-tight">
            <span className="block text-foreground">Développeur</span>
            <span className="block text-gradient">FiveM & Web</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Je transforme vos idées en expériences digitales exceptionnelles. 
            Spécialisé dans le développement web moderne et les serveurs FiveM performants.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              className="btn-primary px-8 py-3 text-lg rounded-full group"
            >
              Voir mes projets
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="btn-ghost px-8 py-3 text-lg rounded-full"
            >
              <Mail className="mr-2 h-5 w-5" />
              Me contacter
            </Button>
          </div>
          
          {/* Quick Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="#" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors group"
            >
              <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Portfolio</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <Button 
          variant="ghost"
          size="sm"
          onClick={scrollToProjects}
          className="rounded-full p-3 hover:bg-surface"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </Button>
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;