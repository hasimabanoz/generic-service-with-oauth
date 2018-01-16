import { Bond } from './assets/bond';
import { CorporateBond } from './assets/corporateBond';
import { ForeignBond } from './assets/foreignBond';
import { Equity } from './assets/equity';
import { ForeignEquity } from './assets/foreignEquity';
import { IMM } from './assets/imm';
import { Repo } from './assets/repo';
import { Deposit } from './assets/deposit';
import { Commodity } from './assets/commodity';
import { InvestmentFund } from './assets/investmentFund';
import { ViobDeposit } from './assets/viobDeposit';
import { Viob } from './assets/viob';
import { LeaseCertificate } from './assets/leaseCertificate';
import { SDI } from './assets/sdi';
import { RealEstate } from './assets/realEstate';
import { EuroBond } from './assets/euroBond';
import { BaseAsset } from './assets/baseAsset';

export class Fund {
  name: string;
  shortName: string;
  bond: Bond;
  repo: Repo;
  imm: IMM;
  timeDeposit: Deposit;
  equity: Equity;
  summary: any[];
  showSummary: false;
  showAssets: false;
  fundTotal: number;
  fundInterestTotal: number;
  singleGraphicData: any;
}
