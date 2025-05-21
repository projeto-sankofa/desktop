"use client"
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import SocialNetworkCard from '@/components/shared/socialnetworkcard';
import { Upload } from 'lucide-react';

const Index = () => {
  const [selectedNetworks, setSelectedNetworks] = useState<Record<string, boolean>>({
    x: false,
    ig: false,
    bs: false
  });
  const [isAutomatic, setIsAutomatic] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [messageCount, setMessageCount] = useState([50]);
  const [ocrTexts, setOcrTexts] = useState<string[]>([]);

  const toggleNetwork = (network: string) => {
    setSelectedNetworks(prev => ({
      ...prev,
      [network]: !prev[network]
    }));
  };

  const handleOcrUpload = () => {
    // Simulando adição de texto OCR após upload
    setOcrTexts(prev => [...prev, `Texto do OCR ${prev.length + 1}`]);
  };

  const handleRemoveOcr = (index: number) => {
    setOcrTexts(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen w-full bg-background">
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Nova análise</h1>
          
          <div className="space-y-6">
            {/* Nome da Análise */}
            <div>
              <Input 
                placeholder="Nome da análise" 
                className="w-full max-w-md" 
              />
            </div>
            
            {/* Switches para tipo de análise e privacidade lado a lado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
              {/* Switch para tipo de análise */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Manual</span>
                  <Switch 
                    checked={isAutomatic} 
                    onCheckedChange={setIsAutomatic}
                  />
                  <span className="text-sm font-medium">Automática</span>
                </div>
              </div>
              
              {/* Switch para Privacidade */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Pública</span>
                  <Switch 
                    checked={isPrivate} 
                    onCheckedChange={setIsPrivate}
                  />
                  <span className="text-sm font-medium">Privada</span>
                </div>
              </div>
            </div>
            
            {/* Rede Social Cards */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Redes Sociais</p>
              <div className="flex gap-3">
                <SocialNetworkCard 
                  network="x" 
                  isSelected={selectedNetworks.x} 
                  onSelect={() => toggleNetwork('x')} 
                />
                <SocialNetworkCard 
                  network="ig" 
                  isSelected={selectedNetworks.ig} 
                  onSelect={() => toggleNetwork('ig')} 
                />
                <SocialNetworkCard 
                  network="bs" 
                  isSelected={selectedNetworks.bs} 
                  onSelect={() => toggleNetwork('bs')} 
                />
              </div>
            </div>
            
            {/* Quantidade de mensagens */}
            <div className="w-full max-w-md">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-muted-foreground">QTD msg</span>
                <span className="text-sm font-medium">{messageCount[0]}</span>
              </div>
              <Slider 
                defaultValue={messageCount} 
                min={10} 
                max={200} 
                step={10} 
                onValueChange={setMessageCount}
              />
            </div>
            
            {/* OCR Upload */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <Card 
                  className="border-dashed border-2 p-6 flex flex-col items-center justify-center cursor-pointer h-40"
                  onClick={handleOcrUpload}
                >
                  <Upload className="mb-2" />
                  <p className="text-center text-muted-foreground">
                    upload para<br />OCR
                  </p>
                </Card>
              </div>
              
              <div className="w-full md:w-1/2">
                {ocrTexts.length === 0 ? (
                  <div className="h-40 flex items-center justify-center text-muted-foreground">
                    Nenhum texto OCR adicionado
                  </div>
                ) : (
                  <div className="space-y-2">
                    {ocrTexts.map((text, index) => (
                      <div key={index} className="flex items-center rounded-md border px-2 py-1.5">
                        <span className="flex-1">{`${index + 1}. ${text}`}</span>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="h-6 w-6 p-0" 
                          onClick={() => handleRemoveOcr(index)}
                        >
                          ✕
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Buscar Button */}
            <Button className="w-full bg-primary text-primary-foreground">
              Buscar
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
