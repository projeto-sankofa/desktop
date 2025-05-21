import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { X, Instagram } from 'lucide-react';

interface SocialNetworkCardProps {
  network: 'x' | 'ig' | 'bs';
  isSelected: boolean;
  onSelect: () => void;
}

const SocialNetworkCard: React.FC<SocialNetworkCardProps> = ({ 
  network, 
  isSelected,
  onSelect
}) => {
  const getNetworkIcon = () => {
    switch (network) {
      case 'x':
        return <X size={20} />;
      case 'ig':
        return <Instagram size={20} />;
      case 'bs':
        // Usando BS como placeholder
        return <span className="font-bold">BS</span>;
      default:
        return null;
    }
  };

  return (
    <Card 
      className={cn(
        "w-16 h-16 cursor-pointer flex items-center justify-center transition-colors",
        isSelected ? "bg-primary text-primary-foreground border-2 border-primary" : "bg-card hover:bg-accent"
      )}
      onClick={onSelect}
    >
      <CardContent className="p-0 flex items-center justify-center h-full">
        {getNetworkIcon()}
      </CardContent>
    </Card>
  );
};

export default SocialNetworkCard;