import { Repos } from './repos';


export interface Repo  {
    totalNominalAmount: number;
    totalPortfolioValue: number;
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
    totalReturnAmount: number;
    totalPortfolioInterestIncomeAsBPS: number;
    repos: Repos[];
}
