
'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import type { Transaction } from '@/lib/types';

const chartConfig = {
  total: {
    label: 'Total',
    color: 'hsl(var(--primary))',
  },
};

interface SpendingChartProps {
  transactions: Transaction[];
}

export function SpendingChart({ transactions }: SpendingChartProps) {
  const spendingData = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => {
      const existing = acc.find((item) => item.category === t.category);
      if (existing) {
        existing.total += Math.abs(t.amount);
      } else {
        acc.push({ category: t.category, total: Math.abs(t.amount) });
      }
      return acc;
    }, [] as { category: string; total: number }[])
    .sort((a, b) => b.total - a.total);
    
  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending by Category</CardTitle>
        <CardDescription>
          A look at where this child's money is going.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={spendingData}>
            <XAxis
              dataKey="category"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              className='capitalize'
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `R${value}`}
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
            />
            <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent
                    formatter={(value) => `R${(value as number).toFixed(2)}`}
                    indicator="dot"
                />}
            />
            <Bar
              dataKey="total"
              fill="var(--color-total)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
