import { useState, useEffect } from 'react';
import { Code2, Database, Globe, Gamepad2 } from 'lucide-react';

interface LoadingProps {
  onComplete: () => void;
}

const Loading = ({ onComplete }: LoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  const steps = [
    { icon: Code2, text: 'Initialisation du système...', delay: 800 },
    { icon: Database, text: 'Chargement des données...', delay: 1000 },
    { icon: Globe, text: 'Chargement...', delay: 900 },
  ];

  useEffect(() => {
    const totalTime = 5000;
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (totalTime / 50));
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 50);
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 900);
    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [onComplete, steps.length]);

  return (
    <div className={`fixed inset-0 bg from-slate-100 z-50 flex items-center justify-center transition-all duration-1000 ${isComplete ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} 
        />
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo Animation */}
        <div className="mb-12 relative">
          <div className="w-20 h-20 mx-auto mb-6 relative">
            {/* Rotating outer ring */}
            <div className="absolute inset-0 border-2 border-transparent border-t-black rounded-full animate-spin" />
            
            {/* Pulsing inner ring */}
            <div className="absolute inset-2 border border-slate-900 rounded-full animate-pulse" />
            
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Code2 className="h-8 w-8 text-black animate-pulse" />
            </div>
            
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-black rounded-full animate-ping"
                style={{
                  top: `${50 + Math.sin((i * Math.PI) / 3) * 35}%`,
                  left: `${50 + Math.cos((i * Math.PI) / 3) * 35}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
          
          <h1 className="text-2xl font-bold text-black mb-2">
            thozz<span className="text-slate-500">.dev</span>
          </h1>
          <p className="text-slate-900">
            Chargement de l'expérience...
          </p>
        </div>

        {/* Progress Steps */}
        <div className="space-y-4 mb-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = index <= currentStep;
            const isComplete = index < currentStep;
            
            return (
              <div
                key={index}
                className={`flex items-center gap-4 transition-all duration-500 ${
                  isActive ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'
                }`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                  isComplete 
                    ? 'bg-white border-white text-slate-900' 
                    : isActive 
                      ? 'border-black text-black animate-pulse'
                      : 'border-slate-600 text-slate-800'
                }`}>
                  {isComplete ? (
                    <div className="w-3 h-3 bg-slate-900 rounded-full" />
                  ) : (
                    <IconComponent className="h-4 w-4" />
                  )}
                </div>
                
                <div className="flex-1 text-left">
                  <p className={`text-sm font-medium transition-colors duration-500 ${
                    isActive ? 'text-black' : 'text-slate-800'
                  }`}>
                    {step.text}
                  </p>
                </div>
                
                {isActive && !isComplete && (
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="flex justify-between text-xs text-slate-100 mb-2">
            <span>Progression</span>
            <span>{Math.round(progress)}%</span>
          </div>
          
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-white via-slate-500 to-slate-900 transition-all duration-300 ease-out rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent animate-pulse" />
            </div>
          </div>
          
          {/* Binary code effect */}
          <div className="absolute -top-2 left-0 right-0 text-xs font-mono text-slate-950 overflow-hidden">
            <div className="whitespace-nowrap">
              {Array.from({ length: 40 }, (_, i) => 
                Math.random() > 0.5 ? '1' : '0'
              ).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;