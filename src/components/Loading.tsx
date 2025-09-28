import { useState, useEffect } from 'react';

interface LoadingProps {
  onComplete: () => void;
}

const Loading = ({ onComplete }: LoadingProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  const texts = [
    'Initialisation...',
    'Chargement des compétences...',
    'Préparation du portfolio...',
    'Prêt !'
  ];

  useEffect(() => {
    if (currentIndex < texts.length) {
      const targetText = texts[currentIndex];
      const timer = setTimeout(() => {
        if (currentText.length < targetText.length) {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => {
            if (currentIndex < texts.length - 1) {
              setCurrentText('');
              setCurrentIndex(currentIndex + 1);
            } else {
              setIsComplete(true);
              setTimeout(() => {
                onComplete();
              }, 800);
            }
          }, 800);
        }
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [currentText, currentIndex, texts, onComplete]);

  return (
    <div className={`fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-1000 ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <div className="mb-8">
          <div className="w-16 h-16 border-2 border-foreground rounded-full border-t-transparent animate-spin mx-auto mb-4"></div>
        </div>
        
        <div className="font-mono text-lg text-foreground h-8 flex items-center justify-center">
          {currentText}
          <span className="ml-1 animate-pulse">|</span>
        </div>
        
        <div className="mt-8 w-64 h-1 bg-muted rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-foreground transition-all duration-500 ease-out"
            style={{ 
              width: `${((currentIndex + (currentText.length / texts[currentIndex]?.length || 1)) / texts.length) * 100}%` 
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;