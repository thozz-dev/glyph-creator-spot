import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Mail, 
  MessageCircle, 
  Send,
  Github,
  ExternalLink,
  Clock,
  Lock
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
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Formulaire bloqué - ne fait rien
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    // Inputs bloqués - ne fait rien
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.info.email,
      value: "contact@joao-dev.com",
      href: "mailto:contact@joao-dev.com",
      color: "primary"
    },
    {
      icon: MessageCircle,
      label: t.contact.info.discord,
      value: ".thozz",
      href: "#",
      color: "secondary"
    },
    {
      icon: Clock,
      label: t.contact.info.availability,
      value: "2h/j",
      href: null,
      color: "accent"
    }
  ];

  const projectTypes = [
    t.contact.projectTypes.web,
    t.contact.projectTypes.fivem,
    t.contact.projectTypes.optimization,
    t.contact.projectTypes.creation,
    t.contact.projectTypes.other
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="mb-6">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form - Bloqué */}
          <Card className="card-elevated p-8 relative">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{t.contact.form.title}</h3>
              <p className="text-muted-foreground">
                {t.contact.form.subtitle}
              </p>
            </div>

            {/* Formulaire flouté */}
            <div className="blur-sm pointer-events-none">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t.contact.form.name} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.contact.form.name}
                      className="transition-all duration-300 focus:shadow-glow"
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t.contact.form.email} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.contact.form.email}
                      className="transition-all duration-300 focus:shadow-glow"
                      disabled
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-2">
                    {t.contact.form.project} *
                  </label>
                  <select
                    id="project"
                    name="project"
                    required
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground transition-all duration-300 focus:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary"
                    disabled
                  >
                    <option value="">{t.contact.form.projectPlaceholder}</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t.contact.form.message} *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={6}
                    className="transition-all duration-300 focus:shadow-glow resize-none"
                    disabled
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={true}
                  className="w-full px-8 py-3 rounded-xm group hover-glow opacity-50"
                >
                  {t.contact.form.send}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Overlay avec message de contact direct */}
            <div className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center rounded-lg">
              <div className="text-center p-6 max-w-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">
                  {t.contact.direct.title}
                </h4>
                <p className="text-muted-foreground mb-6">
                  {t.contact.direct.subtitle}
                </p>
                <div className="flex flex-col gap-3">
                  <Button
                    variant="default"
                    className="w-full rounded-xl hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:contact@joao-dev.com">
                      <Mail className="h-4 w-4 mr-2" />
                      contact@joao-dev.com
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full rounded-xl hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a href="#">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Discord: .thozz
                    </a>
                  </Button>
                </div>
              </div>
            </div>
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
              <h4 className="font-bold text-lg mb-4 text-center">{t.contact.why.title}</h4>
              <div className="space-y-4">
                {[
                  { label: t.contact.why.response, value: "< 24h", icon: Clock },
                  { label: t.contact.why.delivered, value: "10+", icon: ExternalLink },
                  { label: t.contact.why.satisfaction, value: "100%", icon: MessageCircle }
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
              <h4 className="font-bold text-lg mb-4 text-center">{t.contact.social}</h4>
              <div className="flex justify-center gap-4">
                {[
                  { icon: Github, href: "https://github.com/thozz-dev", label: "GitHub" },
                  { icon: ExternalLink, href: "https://www.joao-dev.com/", label: "Portfolio" },
                  { icon: MessageCircle, href: "https://www.joao-dev.com/", label: "Discord" }
                ].map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="sm"
                      className="rounded-xl hover:shadow-glow transition-all duration-300"
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
