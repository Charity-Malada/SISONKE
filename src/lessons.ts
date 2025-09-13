
export type Lesson = {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  language: 'en';
  content: string;
  quiz: {
    question: string;
    options: string[];
    answer: number;
  }[];
  reward_cUSD: number;
};

export const financialLessons: Lesson[] = [
  {
    id: 'lesson_1',
    title: 'Budgeting Basics',
    level: 'Beginner',
    language: 'en',
    content: 'What is a budget? It is a plan for how you will spend your money. This lesson teaches you how to create a simple budget to track your income and expenses.',
    quiz: [
      { question: 'What is a budget?', options: ['A type of savings account', 'A plan for your money', 'A loan from a bank'], answer: 1 }
    ],
    reward_cUSD: 0.50
  },
  {
    id: 'lesson_2',
    title: 'Why Saving is Important',
    level: 'Beginner',
    language: 'en',
    content: 'Saving helps you reach your financial goals and prepares you for emergencies. Learn different ways to save money, even small amounts.',
    quiz: [
      { question: 'Why should you save money?', options: ['To spend it all at once', 'For goals and emergencies', 'Because your parents said so'], answer: 1 }
    ],
    reward_cUSD: 0.50
  },
  {
    id: 'lesson_3',
    title: 'Understanding Digital Wallets',
    level: 'Intermediate',
    language: 'en',
    content: 'A digital wallet holds your money electronically. Discover how to use them safely for payments and transfers.',
    quiz: [
      { question: 'What does a digital wallet do?', options: ['Holds physical cash', 'Stores your money online', 'Prints money'], answer: 1 }
    ],
    reward_cUSD: 1.00
  },
  {
    id: 'lesson_4',
    title: 'Safe Online Payments',
    level: 'Intermediate',
    language: 'en',
    content: 'Learn the dos and don\'ts of paying for things online. We cover how to spot secure websites and avoid common scams.',
    quiz: [
      { question: 'What is a sign of a secure website?', options: ['It has lots of pop-up ads', 'The URL starts with "http://"', 'The URL starts with "https://_E3_80_83"'], answer: 2 }
    ],
    reward_cUSD: 1.00
  },
  {
    id: 'lesson_5',
    title: 'Introduction to Credit',
    level: 'Advanced',
    language: 'en',
    content: 'What is credit and how does it work? This lesson explains the basics of borrowing money and building a good credit history.',
    quiz: [
      { question: 'What is credit?', options: ['Free money from the government', 'Money you borrow and must pay back', 'A type of video game'], answer: 1 }
    ],
    reward_cUSD: 1.50
  },
  {
    id: 'lesson_6',
    title: 'Avoiding Scams',
    level: 'Advanced',
    language: 'en',
    content: 'Scammers use clever tricks to steal your money. Learn to recognize common financial scams and protect yourself.',
    quiz: [
      { question: 'What should you do if an offer seems too good to be true?', options: ['Invest all your money immediately', 'Be cautious and investigate it', 'Share it with all your friends'], answer: 1 }
    ],
    reward_cUSD: 1.50
  }
];
