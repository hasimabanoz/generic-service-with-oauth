import { Equities } from './equities';

export interface Equity {
    totalNominalAmount: number;
    totalPortfolioValue: number;
    totalPortfolioIncome: number;
    totalPortfolioWeight: number;
    totalIncome: number;
    totalEquityPortfolioIncome: number;
    totalCompetitorPortfoliIncome: number;
    totalEquityPortfolioWeight: number;
    totalCompetitorPortfolioWeight: number;
    equities: Equities[];
}
