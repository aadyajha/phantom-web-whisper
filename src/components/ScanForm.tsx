
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScanFormProps {
  onSubmit: (email: string) => void;
  isLoading?: boolean;
  className?: string;
}

export const ScanForm: React.FC<ScanFormProps> = ({ 
  onSubmit,
  isLoading = false,
  className
}) => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    onSubmit(email);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn("w-full max-w-md flex flex-col gap-4", className)}
    >
      <div className="relative">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pr-12 h-14 text-lg rounded-xl border-2 border-primary/20 focus-visible:ring-primary"
          disabled={isLoading}
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/60 w-5 h-5" />
      </div>
      
      <Button 
        type="submit" 
        size="lg" 
        className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity rounded-xl h-14 text-lg font-semibold"
        disabled={isLoading}
      >
        {isLoading ? "Scanning..." : "Find My Digital Footprints"}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        We'll scan the web to find where your email is registered
      </p>
    </form>
  );
};
