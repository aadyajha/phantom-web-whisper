
import React from 'react';
import { PhantomLogo } from './PhantomLogo';
import { cn } from '@/lib/utils';

interface LoadingAnimationProps {
  message?: string;
  className?: string;
}

export const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ 
  message = "Scanning...",
  className 
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center space-y-6", className)}>
      <div className="relative">
        <PhantomLogo size="lg" animated={true} />
        <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin-slow"></div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <p className="text-xl font-medium text-primary">{message}</p>
        <p className="text-sm text-muted-foreground animate-pulse">Looking for your digital footprints...</p>
      </div>
    </div>
  );
};
