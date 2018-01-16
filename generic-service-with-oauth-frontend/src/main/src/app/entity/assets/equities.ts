import { BaseAsset } from './baseAsset';

export class Equities extends BaseAsset {
    //newly added
    securityName: string;
    marketCode: string;
    issuer: string;
    competitorPortfolioWeight: number;
    competitorPortfolioIncome: number;
    equityPortfolioWeight: number;
    competitorPortfolioWeightDifference: number;
    equityPortfolioIncome: number;
    previousPortfolioValue: number;
    industrySector: string[];
    industrySectorStr: string;
    subSector: string[];
    subSectorStr: string;

}
