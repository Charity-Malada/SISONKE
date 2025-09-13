'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ZAR_TO_USD_RATE = 0.053;

export function BalanceCard({ balanceInZAR }: { balanceInZAR: number }) {
  const [currency, setCurrency] = React.useState<'ZAR' | 'USD'>('ZAR');

  const displayBalance =
    currency === 'ZAR' ? balanceInZAR : balanceInZAR * ZAR_TO_USD_RATE;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">My Wallet Balance</CardTitle>
        <Select
          defaultValue="ZAR"
          onValueChange={(value: 'ZAR' | 'USD') => setCurrency(value)}
        >
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="Currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ZAR">ZAR</SelectItem>
            <SelectItem value="USD">USD</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold font-headline">
          {formatter.format(displayBalance)}
        </div>
        <p className="text-xs text-muted-foreground">
          Your available balance ready to use
        </p>
      </CardContent>
    </Card>
  );
}
