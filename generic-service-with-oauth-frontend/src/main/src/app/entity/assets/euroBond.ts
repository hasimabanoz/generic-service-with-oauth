import { BaseAsset } from './baseAsset';

export class EuroBond extends BaseAsset {
    avgirr: number;
    duration: number;
    bmDuration: number;
    bmDiffDays: number;
    security: string;
    isn: string;
    issuer: string;
    maturity: Date;
    scenario: string;
    nominalAmount: number;
    avgCleanPrice: number;
    irr: string;
    bucket: string;
    dtm: string;
    avgDirtyPrice: number;
    validationPrice: number;
    t1ValidationPrice: number;
    currencty: string;
}
