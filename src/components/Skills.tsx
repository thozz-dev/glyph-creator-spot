import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Server, 
  Database, 
  Gamepad2, 
  Globe, 
  Zap,
  Shield,
  Cpu
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Développement Web",
      icon: Globe,
      color: "primary",
      skills: [
        "React / Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB / PostgreSQL",
        "API REST",
        "WebSocket"
      ],
      description: "Applications web modernes et performantes"
    },
    {
      title: "Développement FiveM",
      icon: Gamepad2,
      color: "secondary",
      skills: [
        "Lua Scripting",
        "ESX Framework",
        "QBCore",
        "MySQL",
        "NUI (HTML/CSS/JS)",
        "Client-Server Architecture",
        "Optimisation",
        "Anti-Cheat"
      ],
      description: "Serveurs FiveM optimisés et sécurisés"
    },
    {
      title: "DevOps & Infrastructure",
      icon: Server,
      color: "accent",
      skills: [
        "Linux Administration",
        "Docker",
        "CI/CD",
        "Monitoring",
        "Performance Tuning",
        "Security",
        "Backup Systems",
        "Load Balancing"
      ],
      description: "Infrastructure robuste et scalable"
    }
  ];

  const getIconColorClass = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary";
      case "secondary":
        return "text-secondary";
      case "accent":
        return "text-accent-foreground";
      default:
        return "text-muted-foreground";
    }
  };

  const getBadgeVariant = (color: string) => {
    switch (color) {
      case "primary":
        return "default";
      case "secondary":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="mb-6">
            <span className="text-gradient">Compétences</span> & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une expertise technique diversifiée pour répondre à tous vos besoins, 
            du développement web aux serveurs de jeu les plus complexes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="card-elevated p-6 hover:shadow-glow transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`h-8 w-8 ${getIconColorClass(category.color)}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant={getBadgeVariant(category.color)}
                      className="hover:scale-105 transition-transform duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Code2, value: "50+", label: "Projets Web" },
            { icon: Gamepad2, value: "30+", label: "Serveurs FiveM" },
            { icon: Database, value: "100%", label: "Uptime" },
            { icon: Zap, value: "24/7", label: "Support" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center p-4 rounded-xl bg-surface-elevated border border-border hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;