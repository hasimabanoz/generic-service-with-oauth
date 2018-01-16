import {Bond} from './assets/bond';
import {CorporateBond} from './assets/corporateBond';
import {Equity} from './assets/equity';
import {IMM} from './assets/imm';
import {Repo} from './assets/repo';
import {Deposit} from './assets/deposit';
import {EuroBond} from './assets/euroBond';

export class Summary {

  fundName: string;
  bonds: Bond;
  corporateBonds: CorporateBond;
  equities: Equity;
  imms: IMM;
  repos: Repo;
  deposits: Deposit;
  euroBonds: EuroBond;
}
