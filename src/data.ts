import type { Transaction, SavingsGoal, Badge, Parent, Child } from './types';

export const user = {
  name: 'Amandla',
  avatarUrl: 'https://picsum.photos/seed/amandla/100/100',
};

export const transactions: Transaction[] = [
  {
    id: 'txn_1',
    type: 'merchant_payment',
    party: "Kasi Korner",
    amount: -75.50,
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
    currency: 'ZAR',
    category: 'food',
  },
  {
    id: 'txn_2',
    type: 'p2p',
    party: 'Lethabo',
    amount: 150.00,
    date: new Date(new Date().setDate(new Date().getDate() - 2)),
    currency: 'ZAR',
    category: 'transfer',
  },
  {
    id: 'txn_3',
    type: 'merchant_payment',
    party: "Sizwe's Sneakers",
    amount: -899.99,
    date: new Date(new Date().setDate(new Date().getDate() - 3)),
    currency: 'ZAR',
    category: 'shopping',
  },
  {
    id: 'txn_4',
    type: 'deposit',
    party: 'Mom',
    amount: 500.00,
    date: new Date(new Date().setDate(new Date().getDate() - 4)),
    currency: 'ZAR',
    category: 'deposit',
  },
  {
    id: 'txn_5',
    type: 'merchant_payment',
    party: 'Gogo\'s Kitchen',
    amount: -120.00,
    date: new Date(new Date().setDate(new Date().getDate() - 5)),
    currency: 'ZAR',
    category: 'food',
  },
];

export const savingsGoals: SavingsGoal[] = [
  {
    id: 'goal_1',
    name: 'New Gaming Console',
    targetAmount: 8000,
    currentAmount: 2500,
    imageId: 'gaming-console',
  },
  {
    id: 'goal_2',
    name: 'Concert Tickets',
    targetAmount: 1200,
    currentAmount: 1100,
    imageId: 'concert-tickets',
  },
  {
    id: 'goal_3',
    name: 'Mountain Bike',
    targetAmount: 4500,
    currentAmount: 1250,
    imageId: 'mountain-bike',
  },
];

export const merchantTransactions = transactions.filter(t => t.type === 'merchant_payment' || t.type === 'deposit').map(t => ({
  ...t,
  amount: Math.abs(t.amount)
}));

export const userBadges: Badge[] = [
    {
        id: 'badge_1',
        name: 'First Top-Up',
        description: 'You made your first deposit!',
        icon: 'Milestone',
        unlocked: true,
    },
    {
        id: 'badge_2',
        name: 'Saver',
        description: 'You started your first savings goal.',
        icon: 'PiggyBank',
        unlocked: true,
    },
    {
        id: 'badge_3',
        name: '10 Transactions',
        description: 'You made 10 payments.',
        icon: 'TrendingUp',
        unlocked: false,
    },
     {
        id: 'badge_4',
        name: 'Super Saver',
        description: 'You reached a savings goal!',
        icon: 'Trophy',
        unlocked: false,
    }
]

const child1Transactions: Transaction[] = [
  ...transactions
];

const child2Transactions: Transaction[] = [
  { id: 'child2_txn_1', type: 'deposit', party: 'Dad', amount: 200, date: new Date(new Date().setDate(new Date().getDate() - 1)), currency: 'ZAR', category: 'deposit' },
  { id: 'child2_txn_2', type: 'merchant_payment', party: 'Spaza Shop', amount: -25.00, date: new Date(new Date().setDate(new Date().getDate() - 1)), currency: 'ZAR', category: 'food' },
  { id: 'child2_txn_3', type: 'merchant_payment', party: 'Movie Theatre', amount: -95.00, date: new Date(new Date().setDate(new Date().getDate() - 3)), currency: 'ZAR', category: 'entertainment' },
];

export const parentData: Parent = {
    name: 'Thabo',
    avatarUrl: 'https://picsum.photos/seed/thabo/100/100',
    children: [
        {
            id: 'child_1',
            name: 'Amandla',
            avatarUrl: 'https://picsum.photos/seed/amandla/100/100',
            transactions: child1Transactions
        },
        {
            id: 'child_2',
            name: 'Bongani',
            avatarUrl: 'https://picsum.photos/seed/bongani/100/100',
            transactions: child2Transactions
        }
    ]
}