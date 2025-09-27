import { Code2, Heart, Github, ExternalLink, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Accueil", href: "#hero" },
    { label: "Compétences", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: ExternalLink, href: "#", label: "Portfolio" },
    { icon: MessageCircle, href: "#", label: "Discord" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gradient">DevPortfolio</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Développeur passionné créant des expériences digitales exceptionnelles 
              pour le web et FiveM.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Suivez-moi</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
            <div className="text-sm text-muted-foreground">
              <p>📧 contact@developer.com</p>
              <p>💬 Discord: Developer#1234</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} DevPortfolio. Tous droits réservés.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Fait avec <Heart className="h-4 w-4 text-red-500 animate-pulse" /> en France
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;