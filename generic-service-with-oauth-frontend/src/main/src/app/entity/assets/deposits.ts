import { BaseAsset } from './baseAsset';

export class Deposits extends BaseAsset {
    issuer:String;
    interestRate:number;
    returnAmount:number;
    valuationRate:number;
    previousPortfolioValue:number;
    originalDuration:number;
    startDate:Date;
}
