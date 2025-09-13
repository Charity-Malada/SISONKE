import { Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '../ui/skeleton';

interface FinancialTipCardProps {
  tip: string | null;
  isLoading: boolean;
}

export function FinancialTipCard({ tip, isLoading }: FinancialTipCardProps) {
  return (
    <Card className="bg-gradient-to-br from-primary to-accent border-0">
      <CardHeader className="flex flex-row items-center space-x-3 space-y-0 pb-2">
        <Lightbulb className="h-6 w-6 text-primary-foreground" />
        <CardTitle className="text-lg font-semibold text-primary-foreground">
          Did You Know?
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-white/20" />
            <Skeleton className="h-4 w-3/4 bg-white/20" />
          </div>
        ) : (
          <p className="text-primary-foreground/90">{tip}</p>
        )}
      </CardContent>
    </Card>
  );
}
