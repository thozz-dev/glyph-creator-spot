import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Gamepad2, Star, Zap, Trophy, Target } from "lucide-react";

const ProfileCard = () => {
  const stats = [
    { label: "Power", value: 95, icon: Zap, color: "from-yellow-500/20 to-yellow-600/20" },
    { label: "Speed", value: 88, icon: Target, color: "from-blue-500/20 to-blue-600/20" },
    { label: "XP", value: 92, icon: Trophy, color: "from-purple-500/20 to-purple-600/20" },
  ];

  const skills = [
    { name: "React", level: 95 },
    { name: "FiveM", level: 90 },
    { name: "TypeScript", level: 88 },
  ];

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 border-2 border-border/50 p-6 hover-lift group">
      {/* Holographic effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/30" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/30" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30" />

      <div className="relative z-10">
        {/* Header avec rarity */}
        <div className="flex items-center justify-between mb-6">
          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
            ★ LEGENDARY
          </Badge>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
            ))}
          </div>
        </div>

        {/* Avatar et nom */}
        <div className="text-center mb-6">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1 group-hover:scale-110 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center border-2 border-primary/30">
              <Code2 className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1 text-gradient">THOZZ</h3>
          <Badge variant="secondary" className="rounded-full">
            <Gamepad2 className="h-3 w-3 mr-1" />
            Full Stack Developer
          </Badge>
        </div>

        {/* Stats */}
        <div className="space-y-3 mb-6">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <IconComponent className="h-3 w-3" />
                    </div>
                    <span className="font-medium">{stat.label}</span>
                  </div>
                  <span className="font-bold text-primary">{stat.value}/100</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${stat.value}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills */}
        <div className="space-y-2 mb-6">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Abilities
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge 
                key={skill.name}
                variant="outline" 
                className="relative overflow-hidden group/badge"
              >
                <span className="relative z-10">{skill.name}</span>
                <div 
                  className="absolute inset-0 bg-primary/10 transform origin-left transition-transform"
                  style={{ transform: `scaleX(${skill.level / 100})` }}
                />
              </Badge>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-border/50 text-center">
          <div className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">ID:</span> #DEV2024
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            <span className="font-semibold text-foreground">Level:</span> Expert • 
            <span className="font-semibold text-foreground ml-1">XP:</span> 15+ Projets
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
      </div>
    </Card>
  );
};

export default ProfileCard;
