
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import AdTemplate from "./AdTemplate";

interface AdGeneratorProps {
  template: string;
}

const AdGenerator: React.FC<AdGeneratorProps> = ({ template }) => {
  const [headline, setHeadline] = useState("Vos événements à portée de clic");
  const [subheadline, setSubheadline] = useState("Réservez vos billets dès maintenant");
  const [format, setFormat] = useState("square");
  const [bgColor, setBgColor] = useState("#5f9086");
  const [textColor, setTextColor] = useState("#ffffff");
  const [tagline, setTagline] = useState("Simple. Rapide. Sécurisé.");
  const [opacity, setOpacity] = useState([80]);
  
  const adRef = useRef<HTMLDivElement>(null);

  const downloadImage = async () => {
    try {
      if (!adRef.current) return;
      
      // In a real implementation, we would use a library like html2canvas or dom-to-image
      // For this demo, we'll just show a toast
      toast.success("Image téléchargée avec succès!");
    } catch (error) {
      toast.error("Erreur lors du téléchargement de l'image");
    }
  };

  const getFormatClass = () => {
    switch (format) {
      case "square": return "w-full max-w-[600px] aspect-square";
      case "portrait": return "w-full max-w-[600px] aspect-[4/5]";
      case "landscape": return "w-full max-w-[600px] aspect-[16/9]";
      case "story": return "w-full max-w-[400px] aspect-[9/16]";
      default: return "w-full max-w-[600px] aspect-square";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex flex-col space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="headline">Titre principal</Label>
            <Input 
              id="headline" 
              value={headline} 
              onChange={(e) => setHeadline(e.target.value)} 
              placeholder="Titre accrocheur" 
            />
          </div>
          
          <div>
            <Label htmlFor="subheadline">Sous-titre</Label>
            <Input 
              id="subheadline" 
              value={subheadline} 
              onChange={(e) => setSubheadline(e.target.value)} 
              placeholder="Description courte" 
            />
          </div>
          
          <div>
            <Label htmlFor="tagline">Slogan</Label>
            <Input 
              id="tagline" 
              value={tagline} 
              onChange={(e) => setTagline(e.target.value)} 
              placeholder="Votre slogan" 
            />
          </div>
          
          <div>
            <Label htmlFor="format">Format</Label>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger id="format">
                <SelectValue placeholder="Choisir un format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="square">Carré (Instagram)</SelectItem>
                <SelectItem value="portrait">Portrait (Pinterest)</SelectItem>
                <SelectItem value="landscape">Paysage (Facebook/Twitter)</SelectItem>
                <SelectItem value="story">Story (Instagram/Facebook)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="bgColor">Couleur de fond</Label>
            <div className="flex space-x-2">
              <Input 
                id="bgColor" 
                type="color" 
                value={bgColor} 
                onChange={(e) => setBgColor(e.target.value)} 
                className="w-12 h-10 p-1"
              />
              <Input 
                value={bgColor} 
                onChange={(e) => setBgColor(e.target.value)} 
                className="flex-grow"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="textColor">Couleur du texte</Label>
            <div className="flex space-x-2">
              <Input 
                id="textColor" 
                type="color" 
                value={textColor} 
                onChange={(e) => setTextColor(e.target.value)} 
                className="w-12 h-10 p-1"
              />
              <Input 
                value={textColor} 
                onChange={(e) => setTextColor(e.target.value)} 
                className="flex-grow"
              />
            </div>
          </div>
          
          <div>
            <Label>Opacité du fond ({opacity}%)</Label>
            <Slider 
              value={opacity} 
              onValueChange={setOpacity} 
              max={100} 
              step={1} 
              className="my-2"
            />
          </div>
        </div>
        
        <Button className="w-full bg-[#5f9086] hover:bg-[#4a7269]" onClick={downloadImage}>
          Télécharger l'image
        </Button>
      </div>
      
      <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
        <div ref={adRef} className={getFormatClass()}>
          <AdTemplate 
            template={template}
            headline={headline}
            subheadline={subheadline}
            tagline={tagline}
            bgColor={bgColor}
            textColor={textColor}
            opacity={opacity[0]}
          />
        </div>
      </div>
    </div>
  );
};

export default AdGenerator;
