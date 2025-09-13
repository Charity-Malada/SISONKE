import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Calendar, TrendingUp } from "lucide-react";
import type { Transaction } from "@/lib/types";

interface MerchantRevenueProps {
  transactions: Transaction[];
}

export function MerchantRevenue({ transactions }: MerchantRevenueProps) {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    const dailyRevenue = transactions
        .filter(t => t.date.toDateString() === today.toDateString() && t.amount > 0 && t.type !== 'deposit')
        .reduce((sum, t) => sum + t.amount, 0);

    const weeklyRevenue = transactions
        .filter(t => t.date >= startOfWeek && t.amount > 0 && t.type !== 'deposit')
        .reduce((sum, t) => sum + t.amount, 0);
    
    const totalRevenue = transactions
        .filter(t => t.amount > 0 && t.type !== 'deposit')
        .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R{dailyRevenue.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">+20.1% from yesterday</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">This Week's Revenue</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R{weeklyRevenue.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">+15% from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R{totalRevenue.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">All-time earnings</p>
        </CardContent>
      </Card>
    </div>
  );
}
