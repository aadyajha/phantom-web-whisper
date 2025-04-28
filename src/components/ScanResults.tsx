
import React, { useState } from 'react';
import { ScanResult, AccountData } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { ScrollArea } from '@/components/ui/scroll-area';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const ITEMS_PER_PAGE = 10;

  // Group accounts by category
  const accountsByCategory = result.accounts.reduce((acc: Record<string, AccountData[]>, account) => {
    if (!acc[account.category.toLowerCase()]) {
      acc[account.category.toLowerCase()] = [];
    }
    acc[account.category.toLowerCase()].push(account);
    return acc;
  }, {});

  // Count accounts with personal info
  const personalInfoCount = result.accounts.filter(a => a.hasPersonalInfo).length;

  // Get current accounts based on selected category and pagination
  const getCurrentAccounts = () => {
    let filteredAccounts = selectedCategory === 'all' 
      ? result.accounts 
      : result.accounts.filter(account => account.category.toLowerCase() === selectedCategory);
    
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAccounts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  // Get total pages based on filtered accounts
  const getTotalPages = () => {
    const filteredAccounts = selectedCategory === 'all' 
      ? result.accounts 
      : result.accounts.filter(account => account.category.toLowerCase() === selectedCategory);
    
    return Math.ceil(filteredAccounts.length / ITEMS_PER_PAGE);
  };

  // Handle tab change
  const handleTabChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  // Get distinct categories
  const distinctCategories = [...new Set(result.accounts.map(account => account.category.toLowerCase()))];

  // Generate pagination numbers
  const paginationNumbers = () => {
    const totalPages = getTotalPages();
    const pages = [];
    
    if (totalPages <= 7) {
      // Show all pages if total is 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Complex pagination with ellipsis
      if (currentPage <= 3) {
        // Near start
        for (let i = 1; i <= 3; i++) pages.push(i);
        pages.push(-1); // ellipsis
        for (let i = totalPages - 1; i <= totalPages; i++) pages.push(i);
      } else if (currentPage >= totalPages - 2) {
        // Near end
        pages.push(1, 2);
        pages.push(-1); // ellipsis
        for (let i = totalPages - 2; i <= totalPages; i++) pages.push(i);
      } else {
        // Middle
        pages.push(1);
        pages.push(-1); // ellipsis
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push(-2); // ellipsis
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

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

      <Tabs defaultValue="all" className="w-full" onValueChange={handleTabChange}>
        <ScrollArea className="w-full pb-4">
          <TabsList className="mb-6 inline-flex min-w-max">
            <TabsTrigger value="all">All Sites ({result.accounts.length})</TabsTrigger>
            {distinctCategories.map(category => (
              <TabsTrigger key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)} ({accountsByCategory[category]?.length || 0})
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollArea>

        <TabsContent value={selectedCategory} className="space-y-4">
          {getCurrentAccounts().map(account => (
            <AccountCard key={account.id} account={account} />
          ))}
          
          {/* Pagination */}
          {getTotalPages() > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    aria-disabled={currentPage === 1}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
                
                {paginationNumbers().map((pageNum, index) => (
                  pageNum < 0 ? (
                    <PaginationItem key={`ellipsis-${index}`}>
                      <span className="flex h-9 w-9 items-center justify-center">...</span>
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={pageNum}>
                      <PaginationLink 
                        isActive={pageNum === currentPage}
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  )
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, getTotalPages()))}
                    aria-disabled={currentPage === getTotalPages()}
                    className={currentPage === getTotalPages() ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </TabsContent>
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
