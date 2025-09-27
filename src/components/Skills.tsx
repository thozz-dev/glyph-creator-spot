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

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="mb-6">Compétences & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une expertise technique diversifiée pour répondre à tous vos besoins, 
            du développement web aux serveurs de jeu les plus complexes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="card-elevated p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-4">
                    <IconComponent className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="outline"
                      className="text-xs hover:bg-muted transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple Stats Section */}
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
                className="text-center p-4 rounded-lg bg-card border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <IconComponent className="h-6 w-6 text-foreground mx-auto mb-2" />
                <div className="text-xl font-semibold text-foreground mb-1">{stat.value}</div>
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