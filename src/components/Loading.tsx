import { useState, useEffect } from 'react';
import { Monitor, Chrome, Search, Wifi, Battery, Clock } from 'lucide-react';

interface LoadingProps {
  onComplete: () => void;
}

const Loading = ({ onComplete }: LoadingProps) => {
  const [stage, setStage] = useState(0);
  const [typedUrl, setTypedUrl] = useState('');
  const [showBrowser, setShowBrowser] = useState(false);
  const [showDesktop, setShowDesktop] = useState(false);
  const [laptopOpen, setLaptopOpen] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const fullUrl = 'https://thozz.dev';
  const stages = [
    { name: 'boot', duration: 1000 },
    { name: 'desktop', duration: 800 },
    { name: 'browser', duration: 600 },
    { name: 'typing', duration: 1500 },
    { name: 'loading', duration: 1000 },
    { name: 'complete', duration: 500 }
  ];

  useEffect(() => {
    // Laptop opening animation
    setTimeout(() => setLaptopOpen(true), 300);
    
    // Stage progression
    let currentTime = 0;
    stages.forEach((stageItem, index) => {
      setTimeout(() => {
        setStage(index);
        
        if (index === 1) setShowDesktop(true);
        if (index === 2) setShowBrowser(true);
        if (index === 3) {
          // Typing URL animation
          let charIndex = 0;
          const typeInterval = setInterval(() => {
            if (charIndex < fullUrl.length) {
              setTypedUrl(fullUrl.slice(0, charIndex + 1));
              charIndex++;
            } else {
              clearInterval(typeInterval);
            }
          }, 100);
        }
        if (index === stages.length - 1) {
          setIsComplete(true);
          setTimeout(() => onComplete(), 800);
        }
      }, currentTime);
      currentTime += stageItem.duration;
    });
  }, [onComplete]);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50 flex items-center justify-center transition-all duration-1000 ${isComplete ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
      
      {/* Laptop Container */}
      <div className="relative">
        {/* Laptop Base */}
        <div className="w-96 h-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-500 rounded-lg transform translate-y-1" />
          
          {/* Keyboard */}
          <div className="absolute top-1 left-4 right-4 grid grid-cols-12 gap-0.5">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1 bg-slate-800 rounded-sm" />
            ))}
          </div>
          
          {/* Trackpad */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-slate-800 rounded border border-slate-700" />
        </div>

        {/* Laptop Screen */}
        <div 
          className={`w-96 h-64 bg-gradient-to-b from-slate-800 to-slate-900 rounded-t-lg shadow-2xl border-4 border-slate-700 origin-bottom transition-all duration-1000 ${
            laptopOpen ? 'rotate-0 translate-y-0' : '-rotate-90 translate-y-32'
          }`}
          style={{ transformOrigin: 'bottom center' }}
        >
          {/* Screen Border */}
          <div className="w-full h-full bg-black rounded-lg p-2 relative overflow-hidden">
            
            {/* Boot Screen */}
            {stage === 0 && (
              <div className="w-full h-full flex flex-col items-center justify-center bg-black text-green-400 font-mono text-xs">
                <div className="mb-4">
                  <div className="w-8 h-8 border-2 border-green-400 rounded-full border-t-transparent animate-spin" />
                </div>
                <div className="text-center space-y-1">
                  <div>BIOS Loading...</div>
                  <div className="animate-pulse">Initializing hardware...</div>
                  <div className="flex">
                    <span>RAM: 16GB </span>
                    <span className="text-green-500 ml-2">✓</span>
                  </div>
                  <div className="flex">
                    <span>SSD: 512GB </span>
                    <span className="text-green-500 ml-2">✓</span>
                  </div>
                </div>
              </div>
            )}

            {/* Desktop */}
            {stage >= 1 && (
              <div className={`w-full h-full relative transition-opacity duration-500 ${showDesktop ? 'opacity-100' : 'opacity-0'}`}>
                {/* Desktop Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800" />
                
                {/* Taskbar */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-slate-800/90 backdrop-blur-sm border-t border-slate-600 flex items-center px-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-sm" />
                    </div>
                    {stage >= 2 && (
                      <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center animate-fade-in">
                        <Chrome className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1" />
                  
                  <div className="flex items-center space-x-2 text-white text-xs">
                    <Wifi className="w-3 h-3" />
                    <Battery className="w-3 h-3" />
                    <Clock className="w-3 h-3" />
                    <span>{getCurrentTime()}</span>
                  </div>
                </div>

                {/* Desktop Icons */}
                <div className="absolute top-2 left-2 space-y-3">
                  <div className="flex flex-col items-center text-white text-xs">
                    <div className="w-8 h-8 bg-blue-600 rounded p-1 mb-1">
                      <Monitor className="w-full h-full" />
                    </div>
                    <span>Dossier</span>
                  </div>
                  <div 
                    className={`flex flex-col items-center text-white text-xs cursor-pointer transform transition-all duration-300 ${stage >= 2 ? 'scale-110 animate-pulse' : ''}`}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded p-1 mb-1">
                      <Chrome className="w-full h-full text-white" />
                    </div>
                    <span>Chrome</span>
                  </div>
                </div>
              </div>
            )}

            {/* Browser Window */}
            {stage >= 2 && (
              <div className={`absolute inset-2 bg-white rounded transition-all duration-500 ${showBrowser ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {/* Browser Header */}
                <div className="h-8 bg-slate-200 rounded-t flex items-center px-2 border-b">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                  
                  <div className="flex-1 mx-4">
                    <div className="h-4 bg-white rounded border flex items-center px-2 text-xs">
                      {stage >= 3 ? (
                        <span className="font-mono">{typedUrl}<span className="animate-pulse">|</span></span>
                      ) : (
                        <span className="text-gray-400">Rechercher ou saisir une adresse web</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-1">
                    <Search className="w-3 h-3 text-gray-600" />
                  </div>
                </div>

                {/* Browser Content */}
                <div className="flex-1 p-4 bg-white">
                  {stage < 4 ? (
                    <div className="text-center py-8">
                      <div className="text-gray-500 text-xs">Nouvelle page</div>
                    </div>
                  ) : stage === 4 ? (
                    <div className="flex flex-col items-center justify-center py-8">
                      <div className="w-6 h-6 border-2 border-blue-500 rounded-full border-t-transparent animate-spin mb-2" />
                      <div className="text-xs text-gray-600">Chargement de thozz.dev...</div>
                      <div className="w-32 h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{ width: '75%' }} />
                      </div>
                    </div>
                  ) : (
                    <div className="animate-fade-in">
                      <div className="text-center py-4">
                        <div className="text-lg font-bold text-gray-800 mb-2">thozz.dev</div>
                        <div className="text-xs text-gray-600 mb-4">Développeur FiveM & Web</div>
                        <div className="w-full h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Apple logo */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full" />
        </div>
      </div>

      {/* Loading Text */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white font-medium mb-2">
          {stage === 0 && "Démarrage du système..."}
          {stage === 1 && "Chargement du bureau..."}
          {stage === 2 && "Ouverture du navigateur..."}
          {stage === 3 && "Navigation vers le portfolio..."}
          {stage === 4 && "Chargement du site..."}
          {stage === 5 && "Bienvenue !"}
        </div>
        <div className="w-48 h-1 bg-gray-600 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white rounded-full transition-all duration-500"
            style={{ width: `${((stage + 1) / stages.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;