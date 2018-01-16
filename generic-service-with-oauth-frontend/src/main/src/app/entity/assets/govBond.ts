import { Bonds } from './bonds';
export class GovBond {
    totalNominalAmount: number;
    totalPortfolioAmount: number;
    totalPortfolioIncome: number;
    totalPortfolioWeight: number;
    totalDuration: number;
    totalXIRR: number;
    totalInterestRate: number;
    totalValuationRate: number;
    totalPortfolioDuration: number;
    totalPortfolioInterestWeight: number;
    totalIncome: number;
    totalOriginalDuration: number;
    totalDaysToMaturity: number;
    totalPortfolioInterestIncomeAsBPS: number;
    totalPortfolioValue: number;
    bonds: Bonds[];
}
