export class BaseAsset {
    assetName: string;
    currencyCode: string;
    nominalAmount: number;
    scenerioAmount: number;
    income: number;
    price: number;
    previousPrice: number;
    duration: number;
    xIRR: number;
    fundValue: number;
    portfolioDuration: number;
    portfolioInterestWeight: number;
    portfolioWeight: number;
    portfolioInterestIncomeAsBPS: number;
    portfolioIncome: number;
    portfolioValue: number;
    assetType: number;
    valuationDate: Date;
    maturityDate: Date;
    valuationPrice: number;

    // totals
    // because of data table structure i have to put these in base asset.I'm transferring the amount in get...Data functions.
    totalDuration: number;
    totalNominalAmount: number;
    totalPortfolioAmount: number;
    totalPortfolioIncome: number;
    totalPortfolioWeight: number;
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
    totalReturnAmount: number;
    totalEquityPortfolioIncome: number;
    totalCompetitorPortfoliIncome: number;
    totalEquityPortfolioWeight: number;
    totalCompetitorPortfolioWeight: number;

}
