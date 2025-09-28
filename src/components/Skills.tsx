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
        "Html",
        "CSS",
        "JavaScript",
        "React / Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Supabase",
      ],
      description: "Applications web modernes et performantes"
    },
    {
      title: "Développement FiveM",
      icon: Gamepad2,
      skills: [
        "Lua Scripting",
        "ESX Framework",
        "MySQL",
        "NUI (HTML/CSS/JS)",
        "Client-Server Architecture",
        "Optimisation",
      ],
      description: "Serveurs FiveM optimisés"
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="mb-6">Compétences & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une expertise technique diversifiée pour répondre à tous vos besoins, 
            du développement web aux serveurs fivem les plus complexes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="card-elevated p-6 group hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
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
            { icon: Code2, value: "5+", label: "Projets Web" },
            { icon: Gamepad2, value: "2+", label: "Serveurs FiveM" },
            { icon: Database, value: "10+", label: "Script Fivem" },
            { icon: Zap, value: "10/5", label: "Support" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center p-4 rounded-lg bg-card border border-border hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
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