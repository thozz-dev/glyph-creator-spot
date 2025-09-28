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
      {/* Subtle Background with Minimal Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Minimal Status Badge */}
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 mb-8 bg-card">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span className="text-sm text-muted-foreground">Disponible pour nouveaux projets</span>
          </div>
          
          {/* Clean Heading */}
          <h1 className="mb-6 leading-tight">
            <span className="block text-foreground">Développeur</span>
            <span className="block text-foreground font-normal">FiveM & Web</span>
          </h1>
          
          {/* Clean Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Je transforme vos idées en expériences digitales exceptionnelles. 
            Spécialisé dans le développement web et les serveurs FiveM.
          </p>
          
          {/* Simple CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToProjects}
              className="px-8 py-3 rounded-xl group"
            >
              Voir mes projets
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="px-8 py-3 rounded-xl"
            >
              <Mail className="mr-2 h-4 w-4" />
              Me contacter
            </Button>
          </div>
          
          {/* Minimal Quick Links */}
          <div className="flex justify-center gap-8">
            <a 
              href="https://github.com/thozz-dev" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm">GitHub</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="text-sm">Discord</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button 
          variant="ghost"
          size="sm"
          onClick={scrollToProjects}
          className="rounded-full p-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
      
    </section>
  );
};

export default Hero;