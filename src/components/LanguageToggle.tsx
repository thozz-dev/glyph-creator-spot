import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "fr" | "en";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "fr" ? "en" : "fr";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    // Vous pouvez ajouter ici un context ou un event pour notifier le changement de langue
    window.dispatchEvent(new CustomEvent("languageChange", { detail: newLanguage }));
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="rounded-xl hover-lift group relative overflow-hidden"
    >
      <Languages className="h-4 w-4 mr-2" />
      <span className="font-semibold">{language.toUpperCase()}</span>
      <div className="absolute inset-0 bg-primary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left -z-10" />
    </Button>
  );
};

export default LanguageToggle;
