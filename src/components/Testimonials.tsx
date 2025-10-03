import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alexandre M.",
      role: "Propriétaire de serveur FiveM",
      content: "Excellent travail ! Les scripts sont optimisés et l'interface NUI est magnifique. Notre serveur a gagné beaucoup en performance et en joueurs grâce à son travail.",
      rating: 5,
      initials: "AM",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      id: 2,
      name: "Sophie L.",
      role: "Entrepreneuse",
      content: "Site web moderne et responsive, exactement ce que je voulais. Communication fluide tout au long du projet et respect des délais. Je recommande vivement !",
      rating: 5,
      initials: "SL",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      id: 3,
      name: "Lucas R.",
      role: "Chef de projet",
      content: "Développeur très professionnel et à l'écoute. Il a su comprendre nos besoins et proposer des solutions adaptées. Le résultat dépasse nos attentes.",
      rating: 5,
      initials: "LR",
      gradient: "from-muted to-muted/50"
    },
    {
      id: 4,
      name: "Marie K.",
      role: "Photographe",
      content: "Mon portfolio est magnifique ! Design élégant et navigation intuitive. Mes clients adorent le site. Merci pour ce travail de qualité !",
      rating: 5,
      initials: "MK",
      gradient: "from-surface to-surface-elevated"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="mb-6">Témoignages Clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce que mes clients pensent de mon travail et de mes services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className={`p-6 h-full relative overflow-hidden hover-lift bg-gradient-to-br ${testimonial.gradient} border-border/50`}>
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <Avatar className="h-10 w-10 ring-2 ring-primary/10">
                    <AvatarFallback className="bg-primary/10 text-foreground font-semibold text-sm">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: "600ms" }}>
          <p className="text-muted-foreground">
            Vous voulez être le prochain à partager votre expérience ? 
            <a href="#contact" className="text-foreground font-semibold ml-2 hover:text-primary transition-colors">
              Contactez-moi →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
