import { BaseAsset } from './baseAsset';
export class IMMs extends BaseAsset {
    avgirr: number;
    bmDuration: number;
    bmDiffDays: number;
    security: string;
    maturity: Date;
    faceAmnt: number;
    fundPortfolioValue: number;
    terminationAmount: string;
    irr: string;
    bucket: string;
    dtm: string;
    //newlyAdded
    valuationPrice: number;
    issuer: string;
    startDate: Date;
    interestRate: number;
    returnAmount: number;
    valuationRate: number;
    previousPortfolioValue: number;
    originalDuration: number;

  }

