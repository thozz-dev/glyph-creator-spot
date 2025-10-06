import { Code2, Gamepad2, Zap, Award, Users, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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
      title: t.about.cards.who.title,
      description: t.about.cards.who.description,
      icon: Code2,
      className: "md:col-span-2 md:row-span-2",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      title: t.about.cards.fivem.title,
      description: t.about.cards.fivem.description,
      icon: Gamepad2,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-accent/20 to-accent/10"
    },
    {
      title: t.about.cards.web.title,
      description: t.about.cards.web.description,
      icon: Zap,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-muted to-muted/50"
    },
    {
      title: t.about.cards.quality.title,
      description: t.about.cards.quality.description,
      icon: Award,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-surface to-surface-elevated"
    },
    {
      title: t.about.cards.collaboration.title,
      description: t.about.cards.collaboration.description,
      icon: Users,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-muted/50 to-background"
    },
    {
      title: t.about.cards.innovation.title,
      description: t.about.cards.innovation.description,
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
          <h2 className="mb-6">{t.about.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.about.subtitle}
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
            { value: "3+", label: t.about.stats.experience },
            { value: "15+", label: t.about.stats.projects },
            { value: "100%", label: t.about.stats.satisfaction },
            { value: "24/7", label: t.about.stats.support }
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
