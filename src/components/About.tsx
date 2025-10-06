import { Code2, Gamepad2, Zap, Award, Users, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".bento-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const bentoCards = [
    {
      title: "Qui suis-je ?",
      description: "Développeur passionné avec plusieurs années d'expérience en développement web et FiveM. Je transforme des idées en solutions digitales performantes et élégantes.",
      icon: Code2,
      className: "md:col-span-2 md:row-span-2",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      title: "Expertise FiveM",
      description: "Spécialisé dans la création de serveurs FiveM optimisés avec scripts personnalisés et NUI modernes.",
      icon: Gamepad2,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-accent/20 to-accent/10"
    },
    {
      title: "Développement Web",
      description: "Création d'applications web avec React, Next.js et TypeScript pour des expériences utilisateur exceptionnelles.",
      icon: Zap,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-muted to-muted/50"
    },
    {
      title: "Qualité & Performance",
      description: "Code optimisé, clean et maintenable. Je priorise la performance et l'expérience utilisateur dans chaque projet.",
      icon: Award,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-surface to-surface-elevated"
    },
    {
      title: "Collaboration",
      description: "Travail en étroite collaboration avec les clients pour garantir que chaque projet répond parfaitement aux besoins.",
      icon: Users,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-muted/50 to-background"
    },
    {
      title: "Innovation",
      description: "Toujours à jour avec les dernières technologies et tendances pour offrir des solutions modernes.",
      icon: TrendingUp,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-primary/5 to-background"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="mb-6">À Propos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionné par la création d'expériences digitales uniques, 
            je combine expertise technique et créativité pour donner vie à vos projets.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {bentoCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.title}
                className={`bento-card ${card.className} group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${card.gradient} p-6 hover-lift hover:shadow-lg transition-all duration-500 opacity-0`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foreground/5 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "3+", label: "Années d'expérience" },
            { value: "15+", label: "Projets réalisés" },
            { value: "100%", label: "Clients satisfaits" },
            { value: "24/7", label: "Support disponible" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card border border-border hover-lift animate-fade-up"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
