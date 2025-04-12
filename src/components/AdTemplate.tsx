
import React from "react";

interface AdTemplateProps {
  template: string;
  headline: string;
  subheadline: string;
  tagline: string;
  bgColor: string;
  textColor: string;
  opacity: number;
}

const AdTemplate: React.FC<AdTemplateProps> = ({
  template,
  headline,
  subheadline,
  tagline,
  bgColor,
  textColor,
  opacity
}) => {
  // Convert hex color to rgba for background opacity
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`;
  };

  const backgroundColor = hexToRgba(bgColor, opacity);
  
  // Template specific styling and layout
  const renderTemplate = () => {
    switch (template) {
      case "template1": // Minimaliste
        return (
          <div 
            className="w-full h-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden"
            style={{ backgroundColor, color: textColor }}
          >
            <div className="absolute top-4 left-4">
              <img 
                src="/lovable-uploads/76bd07f1-ab0b-4907-a6ec-dfd3ace2a597.png" 
                alt="Jaayma Ticket Logo" 
                className="h-12 object-contain" 
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 z-10">{headline}</h1>
            <p className="text-xl mb-8 z-10">{subheadline}</p>
            <div className="absolute bottom-6 w-full text-center">
              <p className="text-sm font-medium">{tagline}</p>
            </div>
          </div>
        );
        
      case "template2": // Événement
        return (
          <div 
            className="w-full h-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden"
            style={{ backgroundColor, color: textColor }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
            <div className="z-10 transform -rotate-3">
              <img 
                src="/lovable-uploads/76bd07f1-ab0b-4907-a6ec-dfd3ace2a597.png" 
                alt="Jaayma Ticket Logo" 
                className="h-16 md:h-20 object-contain mx-auto mb-6" 
              />
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-wider">{headline}</h1>
              <div className="w-16 h-1 bg-white mx-auto mb-4"></div>
              <p className="text-xl mb-6">{subheadline}</p>
              <div className="mt-8 border-2 border-white px-6 py-2 inline-block font-bold">
                RÉSERVEZ MAINTENANT
              </div>
            </div>
            <p className="absolute bottom-4 text-sm font-medium z-10">{tagline}</p>
          </div>
        );
        
      case "template3": // Promotion
        return (
          <div 
            className="w-full h-full relative overflow-hidden"
            style={{ backgroundColor: bgColor, color: textColor }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[150%] h-[150%] bg-white opacity-10 rounded-[100%] absolute"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/76bd07f1-ab0b-4907-a6ec-dfd3ace2a597.png" 
                  alt="Jaayma Ticket Logo" 
                  className="h-16 object-contain" 
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{headline}</h1>
              <p className="text-xl mb-8">{subheadline}</p>
              <div className="border-2 border-current rounded-full px-8 py-3 font-bold">
                PROMO CODE: JAAYMA10
              </div>
              <p className="mt-8 text-sm font-medium">{tagline}</p>
            </div>
          </div>
        );
        
      case "template4": // Festif
        return (
          <div 
            className="w-full h-full relative overflow-hidden"
            style={{ color: textColor }}
          >
            <div className="absolute inset-0" style={{ backgroundColor }}></div>
            
            {/* Confetti pattern decorative elements */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-4 h-4 rounded-sm transform rotate-45"
                  style={{
                    backgroundColor: textColor,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: 0.2 + Math.random() * 0.3,
                  }}
                ></div>
              ))}
            </div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
              <div 
                className="w-28 h-28 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <img 
                  src="/lovable-uploads/76bd07f1-ab0b-4907-a6ec-dfd3ace2a597.png" 
                  alt="Jaayma Ticket Logo" 
                  className="h-20 object-contain" 
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">{headline}</h1>
              <p className="text-xl mb-6">{subheadline}</p>
              <div className="px-6 py-3 bg-white text-black font-bold rounded-lg inline-block">
                Réservez maintenant
              </div>
              <p className="absolute bottom-6 text-sm font-medium">{tagline}</p>
            </div>
          </div>
        );
        
      default:
        return (
          <div 
            className="w-full h-full flex flex-col items-center justify-center p-8 text-center"
            style={{ backgroundColor, color: textColor }}
          >
            <img 
              src="/lovable-uploads/76bd07f1-ab0b-4907-a6ec-dfd3ace2a597.png" 
              alt="Jaayma Ticket Logo" 
              className="h-16 object-contain mb-6" 
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{headline}</h1>
            <p className="text-xl mb-8">{subheadline}</p>
            <p className="text-sm font-medium">{tagline}</p>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full shadow-lg overflow-hidden relative">
      {renderTemplate()}
    </div>
  );
};

export default AdTemplate;
