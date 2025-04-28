
import React from 'react';
import { ScanResult, AccountData } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScanResultsProps {
  result: ScanResult;
  onNewScan: () => void;
  className?: string;
}

export const ScanResults: React.FC<ScanResultsProps> = ({ 
  result, 
  onNewScan,
  className
}) => {
  // Group accounts by category
  const categories = result.accounts.reduce((acc: Record<string, AccountData[]>, account) => {
    if (!acc[account.category]) {
      acc[account.category] = [];
    }
    acc[account.category].push(account);
    return acc;
  }, {});

  // Count accounts with personal info
  const personalInfoCount = result.accounts.filter(a => a.hasPersonalInfo).length;

  return (
    <div className={cn("w-full max-w-4xl", className)}>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">
          Digital Footprint Results
        </h2>
        <p className="text-muted-foreground">
          We found {result.accounts.length} accounts linked to <span className="font-semibold">{result.email}</span>
        </p>
        {personalInfoCount > 0 && (
          <Badge variant="outline" className="mt-2 bg-destructive/10 text-destructive border-destructive/20">
            {personalInfoCount} {personalInfoCount === 1 ? 'site has' : 'sites have'} your personal information
          </Badge>
        )}
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="all">All Sites ({result.accounts.length})</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="shopping">Shopping</TabsTrigger>
          <TabsTrigger value="other">Others</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {result.accounts.map(account => (
            <AccountCard key={account.id} account={account} />
          ))}
        </TabsContent>

        {Object.keys(categories).map(category => (
          <TabsContent key={category} value={category.toLowerCase()} className="space-y-4">
            {categories[category].map(account => (
              <AccountCard key={account.id} account={account} />
            ))}
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="mt-8 flex justify-center">
        <Button onClick={onNewScan} variant="outline" className="gap-2">
          Scan Another Email
        </Button>
      </div>
    </div>
  );
};

const AccountCard: React.FC<{ account: AccountData }> = ({ account }) => {
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-200 hover:shadow-md",
      account.hasPersonalInfo && "border-destructive/30"
    )}>
      <div className="flex items-start p-6">
        <div className="flex-shrink-0 mr-4 w-12 h-12 bg-muted rounded-md flex items-center justify-center overflow-hidden">
          {account.logo ? (
            <img src={account.logo} alt={account.name} className="w-full h-full object-contain" />
          ) : (
            <div className="text-xl font-bold text-primary/60">{account.name.charAt(0)}</div>
          )}
        </div>
        
        <div className="flex-grow">
          <CardTitle className="text-lg">{account.name}</CardTitle>
          <CardDescription className="truncate">{account.url}</CardDescription>
          
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-muted">
              {account.category}
            </Badge>
            {account.hasPersonalInfo && (
              <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
                Contains Personal Info
              </Badge>
            )}
          </div>
        </div>
        
        <a 
          href={account.deleteUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-4 flex-shrink-0 bg-accent/20 hover:bg-accent/30 text-accent-foreground rounded-md py-2 px-4 text-sm font-medium flex items-center gap-1 transition-colors"
        >
          <Link className="w-4 h-4" />
          Delete Account
        </a>
      </div>
    </Card>
  );
};
