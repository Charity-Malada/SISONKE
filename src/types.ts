export type Transaction = {
  id: string;
  type: 'p2p' | 'merchant_payment' | 'deposit' | 'withdrawal';
  party: string;
  amount: number;
  date: Date;
  currency: 'ZAR' | 'USD';
  category: 'food' | 'shopping' | 'transfer' | 'entertainment' | 'deposit';
};

export type SavingsGoal = {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  imageId: string;
};

export type Badge = {
    id: string;
    name: string;
    description: string;
    icon: string;
    unlocked: boolean;
}

export type Child = {
    id: string;
    name: string;
    avatarUrl: string;
    transactions: Transaction[];
};

export type Parent = {
    name: string;
    avatarUrl: string;
    children: Child[];
};