import { BaseAsset } from './baseAsset';
import { BondPayments } from './bondPayments';

export class Bonds extends BaseAsset {
    id: number;
    avgirr: number;
    bmDiffDays: number;
    security: string;
    isin: string;
    issuer: string;
    maturity: Date;
    avgCleanPrice: number;
    irr: string;
    portfolioDuration: number;
    bucket: string;
    dtm: number;
    avgDirtyPrice: number;
    valuationPrice: number;
    //newly added
    coupon: number;
    portfolioInterestWeight: number;
    portfolioWeight: number;
    portfolioInterestIncomeAsBPS: number;
    portfolioIncome: number;
    bondName: string;
    bondType: number;
    bondKind: string;
    dayCountType: string;
    nextValuationDate: Date;
    couponFrequency: number;
    daysBetweenCouponPayments: number;
    daysToMaturity: number;
    couponInterest: number;
    cleanPrice: number;
    dirtyPrice: number;
    spread: number;
    accrued: number;
    previousValuationPrice: number;
    bondPayments: BondPayments[];
    nextDayBondPayments: BondPayments[];
}
