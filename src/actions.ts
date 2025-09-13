
'use server';

import { 
  getFinancialLiteracyTip as getFinancialLiteracyTipFlow, 
  type FinancialLiteracyTipInput 
} from "@/ai/flows/financial-literacy-tips";

export async function getFinancialLiteracyTip(input: FinancialLiteracyTipInput): Promise<string> {
  try {
    const result = await getFinancialLiteracyTipFlow(input);
    return result.tip;
  } catch (error) {
    console.error("Error getting financial literacy tip:", error);
    return "Could not load a tip at this time. Please check your connection.";
  }
}
