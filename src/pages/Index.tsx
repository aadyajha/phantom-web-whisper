
import React, { useState } from 'react';
import { PhantomLogo } from '@/components/PhantomLogo';
import { ScanForm } from '@/components/ScanForm';
import { ScanResults } from '@/components/ScanResults';
import { LoadingAnimation } from '@/components/LoadingAnimation';
import { scanEmailAccounts } from '@/utils/scanService';
import { ScanResult } from '@/types';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [showIntro, setShowIntro] = useState(true);

  const handleScan = async (email: string) => {
    setShowIntro(false);
    setIsScanning(true);
    try {
      const result = await scanEmailAccounts(email);
      setScanResult(result);
    } catch (error) {
      console.error('Error scanning email:', error);
    } finally {
      setIsScanning(false);
    }
  };

  const handleNewScan = () => {
    setScanResult(null);
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-background to-secondary/20">
      {/* Header section */}
      <header className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-4">
          <PhantomLogo size="lg" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
            Phantom
          </h1>
        </div>
        <p className="text-lg text-muted-foreground mt-2">
          Find your digital footprint across the web
        </p>
      </header>

      <div className="w-full max-w-4xl flex flex-col items-center">
        {showIntro && !isScanning && !scanResult && (
          <div className="w-full text-center mb-8 space-y-4 max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-foreground">
              Discover where your data exists online
            </h2>
            <p className="text-muted-foreground">
              Enter your email address below and we'll scan the web to find where your account is registered, 
              helping you take control of your digital presence.
            </p>
          </div>
        )}

        {showIntro && !isScanning && !scanResult && (
          <ScanForm onSubmit={handleScan} />
        )}

        {isScanning && (
          <LoadingAnimation message="Scanning the web..." />
        )}

        {!isScanning && scanResult && (
          <ScanResults result={scanResult} onNewScan={handleNewScan} />
        )}
      </div>

      <footer className="mt-auto pt-12 pb-4 text-center text-sm text-muted-foreground">
        <p>Phantom Digital Footprint Tracker © 2025</p>
        <p className="mt-1">Your privacy is our priority</p>
      </footer>
    </div>
  );
};

export default Index;
