
import React from 'react';
import { cn } from '@/lib/utils';

interface PhantomLogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

export const PhantomLogo: React.FC<PhantomLogoProps> = ({ 
  size = 'md', 
  animated = true,
  className
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-32 h-32'
  };
  
  return (
    <div className={cn(
      'relative', 
      sizes[size],
      animated && 'animate-float',
      className
    )}>
      {/* Ghost Body */}
      <div className="absolute inset-0 bg-white rounded-t-[100%] shadow-md">
        {/* Eyes */}
        <div className="absolute top-[35%] left-[25%] w-[15%] h-[15%] rounded-full bg-primary"></div>
        <div className="absolute top-[35%] right-[25%] w-[15%] h-[15%] rounded-full bg-primary"></div>
        
        {/* Mouth */}
        <div className="absolute top-[55%] left-[35%] right-[35%] h-[8%] rounded-full bg-primary opacity-80"></div>
        
        {/* Bottom wavy edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[20%] overflow-hidden">
          <div className="absolute bottom-0 left-[-10%] w-[40%] h-[200%] rounded-[50%] bg-background"></div>
          <div className="absolute bottom-0 left-[30%] w-[40%] h-[200%] rounded-[50%] bg-background"></div>
          <div className="absolute bottom-0 right-[-10%] w-[40%] h-[200%] rounded-[50%] bg-background"></div>
        </div>
      </div>
    </div>
  );
};
