import { BaseAsset } from './baseAsset';

export class Repos extends BaseAsset {
    //newly added
    valuationPrice: number;
    previousPrice: number;
    issuer: string;
    startDate: Date;
    interestRate: number;
    returnAmount: number;
    valuationRate: number;
    previousPortfolioValue: number;
    originalDuration: number;
    repoType: String;
}
