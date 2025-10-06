import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 animate-slide-in-right">
      <Card className="max-w-2xl mx-auto p-6 bg-card/95 backdrop-blur-md border-2 border-border shadow-elegant">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Cookie className="h-6 w-6 text-primary" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2 text-foreground">
              Cookies & Confidentialité
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ce site utilise des cookies pour améliorer votre expérience de navigation. 
              En continuant, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={handleAccept}
                className="rounded-xl hover-lift"
                size="sm"
              >
                Accepter tous les cookies
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                className="rounded-xl hover-lift"
                size="sm"
              >
                Refuser
              </Button>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleDecline}
            className="flex-shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;
