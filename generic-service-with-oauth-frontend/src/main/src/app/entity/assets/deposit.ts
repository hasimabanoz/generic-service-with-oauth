import { Deposits } from './deposits';


export class Deposit {
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
    totalPortfolioInterestIncomeAsBPS: number;
    totalOriginalDuration: number;
    totalReturnAmount: number;
    timeDeposits: Deposits[];
}
