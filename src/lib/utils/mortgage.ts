import { CreditRange, EstimateInput, EstimateResult } from "@/types/lead";

type CreditAssumption = {
  dtiCap: number;
  rateLow: number;
  rateHigh: number;
};

const CREDIT_ASSUMPTIONS: Record<CreditRange, CreditAssumption> = {
  "760+": { dtiCap: 0.45, rateLow: 0.06125, rateHigh: 0.06625 },
  "720-759": { dtiCap: 0.43, rateLow: 0.06375, rateHigh: 0.06875 },
  "680-719": { dtiCap: 0.41, rateLow: 0.06625, rateHigh: 0.07125 },
  "640-679": { dtiCap: 0.39, rateLow: 0.069, rateHigh: 0.0745 },
  "Below 640": { dtiCap: 0.36, rateLow: 0.0725, rateHigh: 0.079 },
};

const HOUSING_COST_SHARE_FOR_PI = 0.82;
const TERM_MONTHS = 30 * 12;

function roundToNearest(value: number, step: number): number {
  return Math.round(value / step) * step;
}

function paymentToLoan(principalAndInterest: number, annualRate: number): number {
  const monthlyRate = annualRate / 12;
  if (monthlyRate <= 0) {
    return principalAndInterest * TERM_MONTHS;
  }

  const discount = (1 - Math.pow(1 + monthlyRate, -TERM_MONTHS)) / monthlyRate;
  return principalAndInterest * discount;
}

function loanToPayment(loanAmount: number, annualRate: number): number {
  const monthlyRate = annualRate / 12;
  if (monthlyRate <= 0) {
    return loanAmount / TERM_MONTHS;
  }

  const growth = Math.pow(1 + monthlyRate, TERM_MONTHS);
  return loanAmount * ((monthlyRate * growth) / (growth - 1));
}

export function calculateBuyingPower(input: EstimateInput): EstimateResult {
  const assumptions = CREDIT_ASSUMPTIONS[input.credit_range];
  const grossMonthlyIncome = input.annual_income / 12;
  const housingBudget = Math.max(
    0,
    grossMonthlyIncome * assumptions.dtiCap - input.monthly_debt,
  );
  const principalAndInterestBudget = housingBudget * HOUSING_COST_SHARE_FOR_PI;

  const baseLoan = paymentToLoan(principalAndInterestBudget, assumptions.rateLow);
  const estimatedLoanLow = roundToNearest(Math.max(baseLoan * 0.9, 0), 1000);
  const estimatedLoanHigh = roundToNearest(Math.max(baseLoan * 1.1, 0), 1000);

  const estimatedPriceLow = roundToNearest(
    Math.max(estimatedLoanLow + input.down_payment, 0),
    1000,
  );
  const estimatedPriceHigh = roundToNearest(
    Math.max(estimatedLoanHigh + input.down_payment, 0),
    1000,
  );

  const monthlyPaymentLow = roundToNearest(
    loanToPayment(estimatedLoanLow, assumptions.rateLow) / HOUSING_COST_SHARE_FOR_PI,
    50,
  );
  const monthlyPaymentHigh = roundToNearest(
    loanToPayment(estimatedLoanHigh, assumptions.rateHigh) / HOUSING_COST_SHARE_FOR_PI,
    50,
  );

  return {
    estimated_price_low: estimatedPriceLow,
    estimated_price_high: estimatedPriceHigh,
    estimated_loan_low: estimatedLoanLow,
    estimated_loan_high: estimatedLoanHigh,
    estimated_monthly_payment_low: Math.max(monthlyPaymentLow, 0),
    estimated_monthly_payment_high: Math.max(monthlyPaymentHigh, 0),
    assumptions,
  };
}

