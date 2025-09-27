import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Gamepad2, 
  Code2,
  Filter
} from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Serveur FiveM RP Avancé",
      description: "Serveur roleplay complet avec système économique, jobs personnalisés, et interface utilisateur moderne. Plus de 500 joueurs simultanés.",
      image: "/api/placeholder/600/400",
      category: "fivem",
      technologies: ["Lua", "ESX", "MySQL", "React", "Node.js"],
      features: ["Système économique", "Jobs personnalisés", "Interface moderne", "Anti-cheat"],
      status: "En ligne",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Dashboard Administrateur",
      description: "Interface d'administration complète pour serveurs FiveM avec monitoring en temps réel, gestion des joueurs et analytics.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["React", "TypeScript", "Tailwind", "Express", "Socket.io"],
      features: ["Monitoring temps réel", "Gestion joueurs", "Analytics", "Logs"],
      status: "Terminé",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "E-commerce Moderne",
      description: "Plateforme e-commerce complète avec paiements sécurisés, gestion des stocks et interface utilisateur responsive.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Tailwind"],
      features: ["Paiements sécurisés", "Gestion stocks", "Panel admin", "Responsive"],
      status: "Terminé",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "Framework FiveM Custom",
      description: "Framework personnalisé optimisé pour les performances, avec système de modules et API simplifiée pour développeurs.",
      image: "/api/placeholder/600/400",
      category: "fivem",
      technologies: ["Lua", "JavaScript", "MySQL", "Redis", "Docker"],
      features: ["Système modulaire", "API simplifiée", "Optimisé", "Documentation"],
      status: "Open Source",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 5,
      title: "Application SaaS",
      description: "Plateforme SaaS complète avec authentification, abonnements, dashboard utilisateur et API REST.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      features: ["Multi-tenant", "Abonnements", "API REST", "Dashboard"],
      status: "Terminé",
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 6,
      title: "Système de Whitelist",
      description: "Système avancé de whitelist pour serveurs FiveM avec processus de candidature automatisé et interface intuitive.",
      image: "/api/placeholder/600/400",
      category: "fivem",
      technologies: ["Lua", "React", "Express", "MySQL", "Discord API"],
      features: ["Candidatures auto", "Interface Discord", "Modération", "Analytics"],
      status: "En ligne",
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const filters = [
    { id: "all", label: "Tous les projets", icon: Code2 },
    { id: "web", label: "Développement Web", icon: Globe },
    { id: "fivem", label: "FiveM", icon: Gamepad2 }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En ligne":
        return "bg-success text-success-foreground";
      case "Terminé":
        return "bg-primary text-primary-foreground";
      case "Open Source":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="mb-6">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations les plus récentes, 
            alliant innovation technique et design moderne.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterOption) => {
            const IconComponent = filterOption.icon;
            return (
              <Button
                key={filterOption.id}
                variant={filter === filterOption.id ? "default" : "outline"}
                onClick={() => setFilter(filterOption.id)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  filter === filterOption.id 
                    ? "shadow-glow scale-105" 
                    : "hover:shadow-md"
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {filterOption.label}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="card-elevated overflow-hidden group hover:shadow-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-surface overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.category === "fivem" ? (
                    <Gamepad2 className="h-16 w-16 text-primary/50" />
                  ) : (
                    <Globe className="h-16 w-16 text-secondary/50" />
                  )}
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} shadow-md`}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-1 mb-6">
                  {project.features.slice(0, 2).map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 btn-primary"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Voir
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="btn-ghost"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Intéressé par mes services ? Discutons de votre projet !
          </p>
          <Button 
            className="btn-primary px-8 py-3 text-lg rounded-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Démarrer un projet
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;