
'use server';

/**
 * @fileOverview A flow to provide tailored financial literacy tips based on user context.
 *
 * - getFinancialLiteracyTip - A function that retrieves a tailored financial literacy tip.
 * - FinancialLiteracyTipInput - The input type for the getFinancialLiteracyTip function.
 * - FinancialLiteracyTipOutput - The return type for the getFinancialLiteracyTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FinancialLiteracyTipInputSchema = z.object({
  transactionType: z
    .string()
    .optional()
    .describe('The type of the recent transaction (e.g., deposit, withdrawal, payment).'),
  transactionAmount: z.number().optional().describe('The amount of the recent transaction.'),
  userBalance: z.number().describe('The current balance of the user.'),
});
export type FinancialLiteracyTipInput = z.infer<typeof FinancialLiteracyTipInputSchema>;

const FinancialLiteracyTipOutputSchema = z.object({
  tip: z.string().describe('A tailored financial literacy tip based on the user context.'),
});
export type FinancialLiteracyTipOutput = z.infer<typeof FinancialLiteracyTipOutputSchema>;

export async function getFinancialLiteracyTip(
  input: FinancialLiteracyTipInput
): Promise<FinancialLiteracyTipOutput> {
  return financialLiteracyTipFlow(input);
}

const financialLiteracyTipPrompt = ai.definePrompt({
  name: 'financialLiteracyTipPrompt',
  input: {schema: FinancialLiteracyTipInputSchema},
  output: {schema: FinancialLiteracyTipOutputSchema},
  prompt: `You are a financial literacy expert for a South African audience. Provide a concise, relevant, and encouraging financial literacy tip.

The user's current balance is R{{{userBalance}}}.
{{#if transactionType}}
The user just made a '{{transactionType}}' transaction of R{{{transactionAmount}}}. Base the tip on this recent activity.
{{else}}
The user has just opened the app. Provide a general tip that is relevant to their current balance. Keep it positive and motivational.
{{/if}}

Tip:`,
});

const financialLiteracyTipFlow = ai.defineFlow(
  {
    name: 'financialLiteracyTipFlow',
    inputSchema: FinancialLiteracyTipInputSchema,
    outputSchema: FinancialLiteracyTipOutputSchema,
  },
  async input => {
    const {output} = await financialLiteracyTipPrompt(input);
    return output!;
  }
);
