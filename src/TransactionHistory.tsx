import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import type { Transaction } from '@/lib/types';
import {
  ArrowDownLeft,
  ArrowUpRight,
  Landmark,
  ShoppingCart,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const categoryIcons: { [key in Transaction['category']]: React.ReactNode } = {
  food: <ShoppingCart className="h-4 w-4" />,
  shopping: <ShoppingCart className="h-4 w-4" />,
  transfer: <ArrowUpRight className="h-4 w-4" />,
  entertainment: <ShoppingCart className="h-4 w-4" />,
  deposit: <ArrowDownLeft className="h-4 w-4" />,
};

interface TransactionHistoryProps {
  transactions: Transaction[];
  title?: string;
  limit?: number;
}

export function TransactionHistory({
  transactions,
  title = 'Transaction History',
  limit,
}: TransactionHistoryProps) {
  const displayTransactions = limit
    ? transactions.slice(0, limit)
    : transactions;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Party</TableHead>
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayTransactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-full">
                      {categoryIcons[tx.category] || <Landmark className="h-4 w-4" />}
                    </div>
                    <div className="font-medium">{tx.party}</div>
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge variant="outline" className="capitalize">
                    {tx.category}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {format(tx.date, 'dd MMM, yyyy')}
                </TableCell>
                <TableCell
                  className={cn(
                    'text-right font-semibold',
                    tx.amount > 0 ? 'text-green-600' : 'text-foreground'
                  )}
                >
                  {tx.amount > 0 ? '+' : ''}R{Math.abs(tx.amount).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
