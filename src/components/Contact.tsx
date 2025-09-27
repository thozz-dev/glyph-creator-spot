import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  MapPin,
  Send,
  Github,
  ExternalLink,
  Clock
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message envoyé !",
      description: "Je vous recontacterai dans les plus brefs délais.",
    });
    
    setFormData({ name: "", email: "", project: "", message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@developer.com",
      href: "mailto:contact@developer.com",
      color: "primary"
    },
    {
      icon: MessageCircle,
      label: "Discord",
      value: "Developer#1234",
      href: "#",
      color: "secondary"
    },
    {
      icon: Clock,
      label: "Disponibilité",
      value: "24h/48h de réponse",
      href: null,
      color: "accent"
    }
  ];

  const projectTypes = [
    "Site Web / Application",
    "Serveur FiveM",
    "Dashboard / Panel Admin",
    "API / Backend",
    "Optimisation / Maintenance",
    "Formation / Consulting",
    "Autre"
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="mb-6">Contactez-moi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prêt à donner vie à votre projet ? Parlons-en ensemble et créons 
            quelque chose d'exceptionnel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-elevated p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Démarrons votre projet</h3>
              <p className="text-muted-foreground">
                Remplissez ce formulaire et je vous recontacterai rapidement.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    className="transition-all duration-300 focus:shadow-glow"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    className="transition-all duration-300 focus:shadow-glow"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">
                  Type de projet *
                </label>
                <select
                  id="project"
                  name="project"
                  required
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground transition-all duration-300 focus:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Sélectionnez un type de projet</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Décrivez votre projet, vos besoins, votre budget approximatif..."
                  rows={6}
                  className="transition-all duration-300 focus:shadow-glow resize-none"
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 rounded-full group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                const colorClass = info.color === "primary" ? "text-primary" : 
                                 info.color === "secondary" ? "text-secondary" : 
                                 "text-accent-foreground";
                
                return (
                  <Card key={info.label} className="card-elevated p-6 group hover:shadow-glow transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className={`h-6 w-6 ${colorClass}`} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{info.label}</h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Quick Stats */}
            <Card className="card-elevated p-6">
              <h4 className="font-bold text-lg mb-4 text-center">Pourquoi me choisir ?</h4>
              <div className="space-y-4">
                {[
                  { label: "Réponse rapide", value: "< 24h", icon: Clock },
                  { label: "Projets livrés", value: "80+", icon: ExternalLink },
                  { label: "Satisfaction client", value: "100%", icon: MessageCircle }
                ].map((stat) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{stat.label}</span>
                      </div>
                      <span className="font-bold text-gradient">{stat.value}</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="card-elevated p-6">
              <h4 className="font-bold text-lg mb-4 text-center">Retrouvez-moi aussi sur</h4>
              <div className="flex justify-center gap-4">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: ExternalLink, href: "#", label: "Portfolio" },
                  { icon: MessageCircle, href: "#", label: "Discord" }
                ].map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="sm"
                      className="rounded-full hover:shadow-glow transition-all duration-300"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <IconComponent className="h-4 w-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;