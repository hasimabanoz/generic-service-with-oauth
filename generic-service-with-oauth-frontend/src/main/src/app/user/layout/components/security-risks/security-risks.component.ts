import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { jqxDataTableComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxdatatable';

import { CorporateBond } from '../../../../entity/assets/corporateBond';
import { EuroBond } from '../../../../entity/assets/euroBond';
import { Fund } from '../../../../entity/fund';
import { Bonds } from './../../../../entity/assets/bonds';
import { Deposits } from './../../../../entity/assets/deposits';
import { Equities } from './../../../../entity/assets/equities';
import { GovBond } from './../../../../entity/assets/govBond';
import { IMMs } from './../../../../entity/assets/imms';
import { Repos } from './../../../../entity/assets/repos';
import { SecurityRisksDtService } from './../../../../service/security-risks-dt-service';


@Component({
  selector: 'app-security-risks',
  templateUrl: './security-risks.component.html',
  styleUrls: ['./security-risks.component.css']
})
export class SecurityRisksComponent implements OnInit, OnChanges {
  // TODO: Security risks alt componentlere ayrılacak.

  @ViewChild('corpBondDataTable') corpBondDataTable: jqxDataTableComponent;
  @ViewChild('govBondDataTable') govBondDataTable: jqxDataTableComponent;
  @ViewChild('repoDataTable') repoDataTable: jqxDataTableComponent;
  @ViewChild('immDataTable') immDataTable: jqxDataTableComponent;
  @ViewChild('equitiesDataTable') equityDataTable: jqxDataTableComponent;
  @ViewChild('timeDepositsDataTable') timeDepositsDataTable: jqxDataTableComponent;
  corpBondList: Bonds[] = [];
  govBondList: Bonds[] = [];
  corporateBondList: CorporateBond[] = [];
  timeDepositsList: Deposits[] = [];
  immList: IMMs[] = [];
  eurobondList: EuroBond[] = [];
  repoList: Repos[] = [];
  equitiesList: Equities[] = [];
  corpBondListSource: any[] = this.getListSourceForBond('hiddenColumns');
  govBondListSource: any[] = this.getListSourceForBond('hiddenColumnsGovBond');
  repoListSource: any[] = this.getListSourceForRepo('hiddenColumnsRepo');
  immListSource: any[] = this.getListSourceForIMM('hiddenColumnsIMM');
  timeDepositsListSource: any[] = this.getListSourceForTimeDeposits('hiddenColumnsTimeDeposits');
  equityListSource: any[] = this.getListSourceForEquities('hiddenColumnsEquity');

  dtSource: any;
  corpBondDataAdapter: any;
  govBondDataAdapter: any;
  repoDataAdapter: any;
  immDataAdapter: any;
  timeDepositsDataAdapter: any;
  equitiesDataAdapter: any;
  bondColumns: any[] = this.securityRisksDtService.getBondColumns();
  corpBondColumns: any[]= this.securityRisksDtService.getCorpBondColumns();
  repoColumns: any[] = this.securityRisksDtService.getRepoColumns();
  immColumns: any[] = this.securityRisksDtService.getImmColumns();
  timeDepositsColumns: any[] = this.securityRisksDtService.getTimeDepositsColumns();
  equityColumns: any[] = this.securityRisksDtService.getEquityColumns();
  editSettings: any =
    {
      saveOnPageChange: true, saveOnBlur: true, saveOnSelectionChange: true, cancelOnEsc: true,
      saveOnEnter: true, editSingleCell: true, editOnDoubleClick: true, editOnF2: true
    };



  @Input() selectedFund: Fund;

  constructor(private securityRisksDtService: SecurityRisksDtService) {

  }


  ngOnInit() {
    this.initializeDataTables();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
    this.updateTableColumns();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initializeDataTables();
  }

  changeTheme(value) {
    this.corpBondDataTable.theme(value);
    this.govBondDataTable.theme(value);
    this.repoDataTable.theme(value);
    this.immDataTable.theme(value);
    this.equityDataTable.theme(value);
    this.timeDepositsDataTable.theme(value);
  }

  initializeDataTables() {
    if (this.selectedFund != null) {
      // corp bond dt table
      this.dtSource = { localdata: this.getCorpBondData(), datatype: 'array' };
      this.corpBondDataAdapter = new jqx.dataAdapter(this.dtSource);
      // gov bond dt table
      this.dtSource = { localdata: this.getGovBondData(), datatype: 'array' };
      this.govBondDataAdapter = new jqx.dataAdapter(this.dtSource);
      // repo dt table
      this.dtSource = { localdata: this.getRepoData(), datatype: 'array' };
      this.repoDataAdapter = new jqx.dataAdapter(this.dtSource);
      // imm dt table
      this.dtSource = { localdata: this.getImmData(), datatype: 'array' };
      this.immDataAdapter = new jqx.dataAdapter(this.dtSource);
      // time deposits table
      this.dtSource = { localdata: this.getTimeDepositsData(), datatype: 'array' };
      this.timeDepositsDataAdapter = new jqx.dataAdapter(this.dtSource);
      // equities table
      this.dtSource = { localdata: this.getEquityData(), datatype: 'array' };
      this.equitiesDataAdapter = new jqx.dataAdapter(this.dtSource);
    }
  }
  updateTableColumns() {
    if (localStorage.getItem('hiddenColumns') != null) {
      const columns = localStorage.getItem('hiddenColumns').split(',');
      for (let i = 0; i < this.corpBondListSource.length; i++) {
        if (columns.includes(this.corpBondListSource[i].value)) {
          this.corpBondDataTable.beginUpdate();
          this.corpBondDataTable.hideColumn(columns[i]);
          this.corpBondDataTable.endUpdate();
        }
      }
    }
  }

  getListSourceForBond(columnName: string): any[] {

    const listSourceU: any[] = this.securityRisksDtService.getBondListSourceLabels();
    if (localStorage.getItem(columnName) != null) {
      const columns = localStorage.getItem(columnName).split(',');
      for (let i = 0; i < listSourceU.length; i++) {
        if (columns.includes(listSourceU[i].value)) {
          listSourceU[i].checked = false;
        }
      }
    }
    return listSourceU;
  }

  getListSourceForRepo(columnName: string): any[] {

    const listSourceU: any[] = this.securityRisksDtService.getRepoListSourceLabels();
    if (localStorage.getItem(columnName) != null) {
      const columns = localStorage.getItem(columnName).split(',');
      for (let i = 0; i < listSourceU.length; i++) {
        if (columns.includes(listSourceU[i].value)) {
          listSourceU[i].checked = false;
        }
      }
    }
    return listSourceU;
  }

  getListSourceForIMM(columnName: string): any[] {

    const listSourceU: any[] = this.securityRisksDtService.getIMMListSourceLabels();
    if (localStorage.getItem(columnName) != null) {
      const columns = localStorage.getItem(columnName).split(',');
      for (let i = 0; i < listSourceU.length; i++) {
        if (columns.includes(listSourceU[i].value)) {
          listSourceU[i].checked = false;
        }
      }
    }
    return listSourceU;
  }

  getListSourceForTimeDeposits(columnName: string): any[] {

    const listSourceU: any[] = this.securityRisksDtService.getTimeDepositsListSourceLabels();
    if (localStorage.getItem(columnName) != null) {
      const columns = localStorage.getItem(columnName).split(',');
      for (let i = 0; i < listSourceU.length; i++) {
        if (columns.includes(listSourceU[i].value)) {
          listSourceU[i].checked = false;
        }
      }
    }
    return listSourceU;
  }

  getListSourceForEquities(columnName: string): any[] {

    const listSourceU: any[] = this.securityRisksDtService.getEquitiesListSourceLabels();
    if (localStorage.getItem(columnName) != null) {
      const columns = localStorage.getItem(columnName).split(',');
      for (let i = 0; i < listSourceU.length; i++) {
        if (columns.includes(listSourceU[i].value)) {
          listSourceU[i].checked = false;
        }
      }
    }
    return listSourceU;
  }

  listBoxOnCheckChangeForCorpBond(event: any): void {
    this.corpBondDataTable.beginUpdate();
    if (event.args.checked) {
      this.corpBondDataTable.showColumn(event.args.value);
      const columns = localStorage.getItem('hiddenColumns').split(',');
      localStorage.removeItem('hiddenColumns');
      let newColumns = '';
      for (let i = 0; i < columns.length; i++) {
        if (columns[i] !== event.args.value) {
          if (newColumns !== '') {
            newColumns = newColumns + ',' + columns[i];
          } else {
            newColumns = columns[i];
          }
        }
      }
      if (newColumns !== '') {
        localStorage.setItem('hiddenColumns', newColumns);
      }
    } else {
      this.corpBondDataTable.hideColumn(event.args.value);
      if (localStorage.getItem('hiddenColumns') != null) {
        localStorage.setItem('hiddenColumns', localStorage.getItem('hiddenColumns') + ',' + event.args.value);
      } else {
        localStorage.setItem('hiddenColumns', event.args.value);
      }
    }
    this.corpBondDataTable.endUpdate();
  }

  listBoxOnCheckChangeForGovBond(event: any): void {
    this.govBondDataTable.beginUpdate();
    if (event.args.checked) {
      this.govBondDataTable.showColumn(event.args.value);
      const columns = localStorage.getItem('hiddenColumnsGovBond').split(',');
      localStorage.removeItem('hiddenColumnsGovBond');
      let newColumns = '';
      for (let i = 0; i < columns.length; i++) {
        if (columns[i] !== event.args.value) {
          if (newColumns !== '') {
            newColumns = newColumns + ',' + columns[i];
          } else {
            newColumns = columns[i];
          }
        }
      }
      if (newColumns !== '') {
        localStorage.setItem('hiddenColumnsGovBond', newColumns);
      }
    } else {
      this.govBondDataTable.hideColumn(event.args.value);
      if (localStorage.getItem('hiddenColumnsGovBond') != null) {
        localStorage.setItem('hiddenColumnsGovBond', localStorage.getItem('hiddenColumnsGovBond') + ',' + event.args.value);
      } else {
        localStorage.setItem('hiddenColumnsGovBond', event.args.value);
      }
    }
    this.govBondDataTable.endUpdate();
  }

  listBoxOnCheckChangeForRepo(event: any): void {
    this.repoDataTable.beginUpdate();
    if (event.args.checked) {
      this.repoDataTable.showColumn(event.args.value);
      const columns = localStorage.getItem('hiddenColumnsRepo').split(',');
      localStorage.removeItem('hiddenColumnsRepo');
      let newColumns = '';
      for (let i = 0; i < columns.length; i++) {
        if (columns[i] !== event.args.value) {
          if (newColumns !== '') {
            newColumns = newColumns + ',' + columns[i];
          } else {
            newColumns = columns[i];
          }
        }
      }
      if (newColumns !== '') {
        localStorage.setItem('hiddenColumnsRepo', newColumns);
      }
    } else {
      this.repoDataTable.hideColumn(event.args.value);
      if (localStorage.getItem('hiddenColumnsRepo') != null) {
        localStorage.setItem('hiddenColumnsRepo', localStorage.getItem('hiddenColumns') + ',' + event.args.value);
      } else {
        localStorage.setItem('hiddenColumnsRepo', event.args.value);
      }
    }
    this.repoDataTable.endUpdate();
  }

  bondsExcelExport(): void {
    this.corpBondDataTable.exportData('xls');
  }

  listBoxOnCheckChangeForIMM(event: any): void {
    this.immDataTable.beginUpdate();
    if (event.args.checked) {
      this.immDataTable.showColumn(event.args.value);
      const columns = localStorage.getItem('hiddenColumnsIMM').split(',');
      localStorage.removeItem('hiddenColumnsIMM');
      let newColumns = '';
      for (let i = 0; i < columns.length; i++) {
        if (columns[i] !== event.args.value) {
          if (newColumns !== '') {
            newColumns = newColumns + ',' + columns[i];
          } else {
            newColumns = columns[i];
          }
        }
      }
      if (newColumns !== '') {
        localStorage.setItem('hiddenColumnsIMM', newColumns);
      }
    } else {
      this.immDataTable.hideColumn(event.args.value);
      if (localStorage.getItem('hiddenColumnsIMM') != null) {
        localStorage.setItem('hiddenColumnsIMM', localStorage.getItem('hiddenColumnsIMM') + ',' + event.args.value);
      } else {
        localStorage.setItem('hiddenColumnsIMM', event.args.value);
      }
    }
    this.immDataTable.endUpdate();
  }

  listBoxOnCheckChangeForTimeDeposits(event: any): void {
    this.timeDepositsDataTable.beginUpdate();
    if (event.args.checked) {
      this.timeDepositsDataTable.showColumn(event.args.value);
      const columns = localStorage.getItem('hiddenColumnsTD').split(',');
      localStorage.removeItem('hiddenColumnsTD');
      let newColumns = '';
      for (let i = 0; i < columns.length; i++) {
        if (columns[i] !== event.args.value) {
          if (newColumns !== '') {
            newColumns = newColumns + ',' + columns[i];
          } else {
            newColumns = columns[i];
          }
        }
      }
      if (newColumns !== '') {
        localStorage.setItem('hiddenColumnsTD', newColumns);
      }
    } else {
      this.timeDepositsDataTable.hideColumn(event.args.value);
      if (localStorage.getItem('hiddenColumnsTD') != null) {
        localStorage.setItem('hiddenColumnsTD', localStorage.getItem('hiddenColumnsTD') + ',' + event.args.value);
      } else {
        localStorage.setItem('hiddenColumnsTD', event.args.value);
      }
    }
    this.timeDepositsDataTable.endUpdate();
  }

  listBoxOnCheckChangeForEquities(event: any): void {
    this.equityDataTable.beginUpdate();
    if (event.args.checked) {
      this.equityDataTable.showColumn(event.args.value);
      const columns = localStorage.getItem('hiddenColumnsEquity').split(',');
      localStorage.removeItem('hiddenColumnsEquity');
      let newColumns = '';
      for (let i = 0; i < columns.length; i++) {
        if (columns[i] !== event.args.value) {
          if (newColumns !== '') {
            newColumns = newColumns + ',' + columns[i];
          } else {
            newColumns = columns[i];
          }
        }
      }
      if (newColumns !== '') {
        localStorage.setItem('hiddenColumnsEquity', newColumns);
      }
    } else {
      this.equityDataTable.hideColumn(event.args.value);
      if (localStorage.getItem('hiddenColumnsEquity') != null) {
        localStorage.setItem('hiddenColumnsEquity', localStorage.getItem('hiddenColumnsEquity') + ',' + event.args.value);
      } else {
        localStorage.setItem('hiddenColumnsEquity', event.args.value);
      }
    }
    this.equityDataTable.endUpdate();
  }

  onCellEndEdit(event: any): void {
    const args = event.args;
    // row key
    const rowKey = args.key;
    // row's index.
    const rowIndex = args.index;
    // row's data.
    const rowData = args.row;
    // row's index in the data source.
    const rowBoundIndex = args.boundIndex;
    // column's data field.
    const columnDataField = args.dataField;
    // column's display field.
    const columnDisplayField = args.displayField;
    // cell's value.
    const value = args.value;

    // TODO: arka tarafa value ile cagri yaptiktan sonra donen verileri tekrar localdata'ya set etmem gerekiyor.
    console.log('cellEndEdit - Row: ' + rowIndex + ', Column: ' + columnDataField + ', Value: ' + value);

    // this.bondSource.localdata = this.getBondData();
    // this.bondDataAdapter = new jqx.dataAdapter(this.bondSource);
  }



  getCorpBondData(): Bonds[] {
    this.corpBondList = [];
    let corpBond: GovBond;
    if (this.selectedFund != null) {

      if (this.selectedFund.bond != null) {
        corpBond = this.selectedFund.bond.corpBond;
      }
      if (corpBond) {
        for (const bond of corpBond.bonds) {
          bond.totalDuration = corpBond.totalDuration;
          bond.totalNominalAmount = corpBond.totalNominalAmount;
          bond.totalPortfolioValue = corpBond.totalPortfolioValue;
          bond.totalXIRR = corpBond.totalXIRR;
          bond.totalPortfolioDuration = corpBond.totalPortfolioDuration;
          bond.totalPortfolioInterestWeight = corpBond.totalPortfolioInterestWeight;
          bond.totalPortfolioWeight = corpBond.totalPortfolioWeight;
          bond.totalIncome = corpBond.totalIncome;
          bond.totalPortfolioInterestIncomeAsBPS = corpBond.totalPortfolioInterestIncomeAsBPS;
          bond.totalPortfolioIncome = corpBond.totalPortfolioIncome;
          bond.totalDaysToMaturity = corpBond.totalDaysToMaturity;
          this.corpBondList.push(bond);
        }
      }
    }
    return this.corpBondList;
  }

  getGovBondData(): Bonds[] {
    this.govBondList = [];
    let govBond: GovBond;
    if (this.selectedFund != null && this.selectedFund.bond != null) {
      govBond = this.selectedFund.bond.govBond;
      if (govBond) {
        for (const bond of govBond.bonds) {
          bond.totalDuration = govBond.totalDuration;
          bond.totalNominalAmount = govBond.totalNominalAmount;
          bond.totalPortfolioValue = govBond.totalPortfolioValue;
          bond.totalXIRR = govBond.totalXIRR;
          bond.totalPortfolioDuration = govBond.totalPortfolioDuration;
          bond.totalPortfolioInterestWeight = govBond.totalPortfolioInterestWeight;
          bond.totalPortfolioWeight = govBond.totalPortfolioWeight;
          bond.totalIncome = govBond.totalIncome;
          bond.totalPortfolioInterestIncomeAsBPS = govBond.totalPortfolioInterestIncomeAsBPS;
          bond.totalPortfolioIncome = govBond.totalPortfolioIncome;
          bond.totalDaysToMaturity = govBond.totalDaysToMaturity;
          this.govBondList.push(bond);
        }
      }
    }
    return this.govBondList;
  }

  getRepoData(): Repos[] {
    this.repoList = [];
    if (this.selectedFund != null && this.selectedFund.repo != null) {
      const repoTemp = this.selectedFund.repo;
      for (const repo of repoTemp.repos) {
        repo.totalDuration = repoTemp.totalDuration;
        repo.totalNominalAmount = repoTemp.totalNominalAmount;
        repo.totalPortfolioValue = repoTemp.totalPortfolioValue;
        repo.totalReturnAmount = repoTemp.totalReturnAmount;
        repo.totalXIRR = repoTemp.totalXIRR;
        repo.totalInterestRate = repoTemp.totalInterestRate;
        repo.totalValuationRate = repoTemp.totalValuationRate;
        repo.totalPortfolioDuration = repoTemp.totalPortfolioDuration;
        repo.totalPortfolioInterestWeight = repoTemp.totalPortfolioInterestWeight;
        repo.totalPortfolioWeight = repoTemp.totalPortfolioWeight;
        repo.totalIncome = repoTemp.totalIncome;
        repo.totalPortfolioInterestIncomeAsBPS = repoTemp.totalPortfolioInterestIncomeAsBPS;
        repo.totalPortfolioIncome = repoTemp.totalPortfolioIncome;
        repo.totalOriginalDuration = repoTemp.totalOriginalDuration;
        this.repoList.push(repo);
      }
    }
    return this.repoList;
  }
  getImmData(): IMMs[] {
    this.immList = [];
    if (this.selectedFund != null && this.selectedFund.imm != null) {
      const immTemp = this.selectedFund.imm;
      for (const imm of immTemp.imms) {
        imm.totalDuration = immTemp.totalDuration;
        imm.totalNominalAmount = immTemp.totalNominalAmount;
        imm.totalPortfolioValue = immTemp.totalPortfolioValue;
        imm.totalReturnAmount = immTemp.totalReturnAmount;
        imm.totalXIRR = immTemp.totalXIRR;
        imm.totalInterestRate = immTemp.totalInterestRate;
        imm.totalValuationRate = immTemp.totalValuationRate;
        imm.totalPortfolioDuration = immTemp.totalPortfolioDuration;
        imm.totalPortfolioInterestWeight = immTemp.totalPortfolioInterestWeight;
        imm.totalPortfolioWeight = immTemp.totalPortfolioWeight;
        imm.totalIncome = immTemp.totalIncome;
        imm.totalPortfolioInterestIncomeAsBPS = immTemp.totalPortfolioInterestIncomeAsBPS;
        imm.totalPortfolioIncome = immTemp.totalPortfolioIncome;
        imm.totalOriginalDuration = immTemp.totalOriginalDuration;
        this.immList.push(imm);
      }
    }
    return this.immList;
  }
  getTimeDepositsData(): Deposits[] {
    this.timeDepositsList = [];
    if (this.selectedFund != null && this.selectedFund.timeDeposit != null) {
      const timeDepositTemp = this.selectedFund.timeDeposit;
      for (const timeDeposit of timeDepositTemp.timeDeposits) {
        timeDeposit.totalDuration = timeDepositTemp.totalDuration;
        timeDeposit.totalNominalAmount = timeDepositTemp.totalNominalAmount;
        timeDeposit.totalPortfolioValue = timeDepositTemp.totalPortfolioValue;
        timeDeposit.totalReturnAmount = timeDepositTemp.totalReturnAmount;
        timeDeposit.totalXIRR = timeDepositTemp.totalXIRR;
        timeDeposit.totalInterestRate = timeDepositTemp.totalInterestRate;
        timeDeposit.totalValuationRate = timeDepositTemp.totalValuationRate;
        timeDeposit.totalPortfolioDuration = timeDepositTemp.totalPortfolioDuration;
        timeDeposit.totalPortfolioInterestWeight = timeDepositTemp.totalPortfolioInterestWeight;
        timeDeposit.totalPortfolioWeight = timeDepositTemp.totalPortfolioWeight;
        timeDeposit.totalIncome = timeDepositTemp.totalIncome;
        timeDeposit.totalPortfolioInterestIncomeAsBPS = timeDepositTemp.totalPortfolioInterestIncomeAsBPS;
        timeDeposit.totalPortfolioIncome = timeDepositTemp.totalPortfolioIncome;
        timeDeposit.totalOriginalDuration = timeDepositTemp.totalOriginalDuration;
        this.timeDepositsList.push(timeDeposit);
      }
    }
    return this.timeDepositsList;
  }
  getEquityData(): Equities[] {
    this.equitiesList = [];
    if (this.selectedFund != null && this.selectedFund.equity != null) {
      const equityTemp = this.selectedFund.equity;

      for (const equity of equityTemp.equities) {
        equity.totalNominalAmount = equityTemp.totalNominalAmount;
        equity.totalPortfolioValue = equityTemp.totalPortfolioValue;
        equity.totalIncome = equityTemp.totalIncome;
        equity.totalEquityPortfolioIncome = equityTemp.totalEquityPortfolioIncome;
        equity.totalPortfolioIncome = equityTemp.totalPortfolioIncome;
        equity.totalCompetitorPortfoliIncome = equityTemp.totalCompetitorPortfoliIncome;
        equity.totalEquityPortfolioWeight = equityTemp.totalEquityPortfolioWeight;
        equity.totalPortfolioWeight = equityTemp.totalPortfolioWeight;
        equity.totalCompetitorPortfolioWeight = equityTemp.totalCompetitorPortfolioWeight;
        equity.industrySectorStr = equity.industrySector ? equity.industrySector.join() : '';
        equity.subSectorStr = equity.subSector ? equity.subSector.join() : '';
        this.equitiesList.push(equity);
      }
    }
    return this.equitiesList;
  }
}
