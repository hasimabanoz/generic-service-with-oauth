import { Injectable } from '@angular/core';
@Injectable()
export class SecurityRisksDtService {
  private renderStringStart = '<div style="margin: 4px; float: left;  height: 100%;"><strong>Total: </strong>';
  getBondColumns(): any[] {
    const bondColumns: any[] =
      [
        { text: 'Security', dataField: 'bondName', width: 150, editable: false },
        { text: 'ISIN', dataField: 'isin', width: 150, editable: false },
        { text: 'Issuer', dataField: 'issuer', width: 250, editable: false },
        { text: 'Maturity', dataField: 'maturityDate', width: 100, editable: false, cellsFormat: 'd' },
        {
          text: 'Durasyon', dataField: 'duration', width: 150, editable: false, cellsFormat: 'f',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalDuration']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        { text: 'Scenario', dataField: 'scenarioAmount', width: 100, editable: true, cellsFormat: 'f' },
        {
          text: 'Nominal Miktar', dataField: 'nominalAmount', width: 130, editable: false, cellsFormat: 'f',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalNominalAmount']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Fon Portföy Değeri', dataField: 'portfolioValue', width: 150, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioValue']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        { text: 'Ort. Temiz Fiyat', dataField: 'cleanPrice', width: 150, editable: false, cellsFormat: 'f' },
        {
          text: 'IRR', dataField: 'xIRR', width: 100, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalXIRR']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        { text: 'Ort. Kirli Fiyat', dataField: 'dirtyPrice', width: 100, editable: false, cellsFormat: 'f3' },
        { text: 'Değerleme Fiyatı', dataField: 'valuationPrice', width: 150, editable: false, cellsFormat: 'f3' },
        {
          text: 'Portföy Durasyon', dataField: 'portfolioDuration', width: 150, editable: false, cellsFormat: 'n',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioDuration']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Faiz Port. Ağ.', dataField: 'portfolioInterestWeight', width: 100, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioInterestWeight']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Portföy Ağırlığı', dataField: 'portfolioWeight', width: 150, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioWeight']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Getiri(bps)', dataField: 'income', width: 100, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalIncome']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Faiz Portföy Getiri (bps)', dataField: 'portfolioInterestIncomeAsBPS', width: 200, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioInterestIncomeAsBPS']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Portföy Getiri', dataField: 'portfolioIncome', width: 100, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioIncome']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'VKG', dataField: 'daysToMaturity', width: 100, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalDaysToMaturity']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        { text: 'T1 Değerleme Fiyatı', dataField: 'previousPortfolioValue', width: 150, editable: false, cellsFormat: 'f3' },
        { text: 'Para Birimi', dataField: 'currencyCode', width: 100, editable: false },
        { text: 'Coupon', dataField: 'couponInterest', width: 100, editable: false, cellsFormat: 'f3' }
      ];
    return bondColumns;
  }

  getCorpBondColumns(): any[] {
    const bondColumns: any[] =
      [
        { text: 'Security', dataField: 'bondName', width: 150, editable: false },
        { text: 'ISIN', dataField: 'isin', width: 150, editable: false },
        { text: 'Issuer', dataField: 'issuer', width: 250, editable: false },
        { text: 'Maturity', dataField: 'maturityDate', width: 100, editable: false, cellsFormat: 'd' },
        {
          text: 'Durasyon', dataField: 'duration', width: 150, editable: false, cellsFormat: 'n',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalDuration']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        { text: 'Scenario', dataField: 'scenarioAmount', width: 100, editable: true, cellsFormat: 'f' },
        {
          text: 'Nominal Miktar', dataField: 'nominalAmount', width: 130, editable: false, cellsFormat: 'f',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalNominalAmount']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Fon Portföy Değeri', dataField: 'portfolioValue', width: 150, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioValue']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        { text: 'Ort. Temiz Fiyat', dataField: 'cleanPrice', width: 150, editable: false, cellsFormat: 'f' },
        {
          text: 'IRR', dataField: 'xIRR', width: 100, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalXIRR']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        { text: 'Ort. Kirli Fiyat', dataField: 'dirtyPrice', width: 100, editable: false, cellsFormat: 'f3' },
        { text: 'Değerleme Fiyatı', dataField: 'valuationPrice', width: 150, editable: false, cellsFormat: 'f3' },
        {
          text: 'Portföy Durasyon', dataField: 'portfolioDuration', width: 150, editable: false, cellsFormat: 'n',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioDuration']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Faiz Port. Ağ.', dataField: 'portfolioInterestWeight', width: 100, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioInterestWeight']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Portföy Ağırlığı', dataField: 'portfolioWeight', width: 150, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioWeight']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Getiri(bps)', dataField: 'income', width: 100, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalIncome']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Faiz Portföy Getiri (bps)', dataField: 'portfolioInterestIncomeAsBPS', width: 200, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioInterestIncomeAsBPS']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Portföy Getiri', dataField: 'portfolioIncome', width: 100, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioIncome']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'VKG', dataField: 'daysToMaturity', width: 100, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalDaysToMaturity']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        { text: 'T1 Değerleme Fiyatı', dataField: 'previousPortfolioValue', width: 150, editable: false, cellsFormat: 'f3' },
        { text: 'Para Birimi', dataField: 'currencyCode', width: 100, editable: false },
        { text: 'Coupon', dataField: 'couponInterest', width: 100, editable: false, cellsFormat: 'f3' }
      ];
    return bondColumns;
  }

  getBondListSourceLabels(): any[] {
    const listSourceLabels: any[] =
      [
        { label: 'Security', value: 'bondName', checked: true },
        { label: 'ISIN', value: 'isin', checked: true },
        { label: 'Issuer', value: 'issuer', checked: true },
        { label: 'Maturity', value: 'maturityDate', checked: true },
        { label: 'Durasyon', value: 'duration', checked: true },
        { label: 'Scenario', value: 'scenarioAmount', checked: true },
        { label: 'Nominal Miktar', value: 'nominalAmount', checked: true },
        { label: 'Fon Portföy Değeri', value: 'portfolioValue', checked: true },
        { label: 'Ort. Temiz Fiyat', value: 'cleanPrice', checked: true },
        { label: 'IRR', value: 'xIRR', checked: true },
        { label: 'Ort. Kirli Fiyat', value: 'dirtyPrice', checked: true },
        { label: 'Değerleme Fiyatı', value: 'valuationPrice', checked: true },
        { label: 'Portföy Durasyon', value: 'portfolioDuration', checked: true },
        { label: 'Faiz Port. Ağ.', value: 'portfolioInterestWeight', checked: true },
        { label: 'Portföy Ağırlığı', value: 'portfolioWeight', checked: true },
        { label: 'Getiri (bps)', value: 'income', checked: true },
        { label: 'Faiz Portföy Getiri (bps)', value: 'portfolioInterestIncomeAsBPS', checked: true },
        { label: 'Portföy Getiri', value: 'portfolioIncome', checked: true },
        { label: 'Para Birimi', value: 'currencyCode', checked: true },
        { label: 'Coupon', value: 'couponInterest', checked: true },
      ];
    return listSourceLabels;
  }



  getRepoColumns(): any[] {
    const repoColumns: any[] =
      [
        { text: 'Issuer', dataField: 'issuer', width: 150, editable: false },
        { text: 'Type (GOVT/CORP)', dataField: 'repoType', width: 150, editable: false },
        { text: 'Başlangıç Tarihi', dataField: 'startDate', width: 150, editable: false, cellsFormat: 'D' },
        { text: 'Vade Sonu', dataField: 'maturityDate', width: 100, editable: false, cellsFormat: 'D' },
        {
          text: 'Durasyon', dataField: 'duration', width: 150, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalDuration']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        { text: 'Scenario', dataField: 'scenarioAmount', width: 100, editable: true, cellsFormat: 'f' },
        {
          text: 'Satılan Tutar', dataField: 'nominalAmount', width: 100, editable: false, ellsFormat: 'f',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalNominalAmount']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Fon Portföy Değeri', dataField: 'portfolioValue', width: 150, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioValue']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Geri Dönüş Tutarı', dataField: 'returnAmount', width: 150, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalReturnAmount']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'IRR', dataField: 'xIRR', width: 100, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalXIRR']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Faiz Oranı', dataField: 'interestRate', width: 100, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalInterestRate']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Değerleme Oranı', dataField: 'valuationRate', width: 150, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalValuationRate']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Portföy Durasyon', dataField: 'portfolioDuration', width: 150, editable: false, cellsFormat: 'n',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioDuration']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Faiz Port. Ağ.', dataField: 'portfolioInterestWeight', width: 100, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioInterestWeight']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Portföy Ağırlığı', dataField: 'portfolioWeight', width: 150, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioWeight']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Getiri (bps)', dataField: 'income', width: 100, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalIncome']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Faiz Portföy Getiri (bps)', dataField: 'portfolioInterestIncomeAsBPS', width: 200, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioInterestIncomeAsBPS']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Portföy Getiri', dataField: 'portfolioIncome', width: 150, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioIncome']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Orjinal Vade', dataField: 'originalDuration', width: 100, editable: false, cellsFormat: 'n',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalOriginalDuration']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }

        },
        { text: 'T-1 FPD', dataField: 'previousPortfolioValue', width: 150, editable: false , cellsFormat: 'f3' },
        { text: 'Para Birimi', dataField: 'currencyCode', width: 100, editable: false },
      ];
    return repoColumns;
  }

  getRepoListSourceLabels(): any[] {
    const listSourceLabels: any[] =
      [
        { label: 'Issuer', value: 'issuer', checked: true },
        { label: 'Type (GOVT/CORP)', value: 'repoType', checked: true },
        { label: 'Başlangıç Tarihi', value: 'startDate', checked: true },
        { label: 'Vade Sonu', value: 'maturityDate', checked: true },
        { label: 'Durasyon', value: 'duration', checked: true },
        { label: 'Scenario', value: 'scenarioAmount', checked: true },
        { label: 'Satılan Tutar', value: 'nominalAmount', checked: true },
        { label: 'Fon Portföy Değeri', value: 'portfolioValue', checked: true },
        { label: 'Geri Dönüş Tutarı', value: 'returnAmount', checked: true },
        { label: 'IRR', value: 'xIRR', checked: true },
        { label: 'Faiz Oranı', value: 'interestRate', checked: true },
        { label: 'Değerleme Oranı', value: 'valuationRate', checked: true },
        { label: 'Portföy Durasyon', value: 'portfolioDuration', checked: true },
        { label: 'Faiz Port. Ağ.', value: 'portfolioInterestWeight', checked: true },
        { label: 'Portföy Ağırlığı', value: 'portfolioWeight', checked: true },
        { label: 'Getiri (bps)', value: 'income', checked: true },
        { label: 'Faiz Portföy Getiri (bps)', value: 'portfolioInterestIncomeAsBPS', checked: true },
        { label: 'Portföy Getiri', value: 'portfolioIncome', checked: true },
        { label: 'Orjinal Vade', value: 'originalDuration', checked: true },
        { label: 'T-1 FPD', value: 'previousPortfolioValue', checked: true },
        { label: 'Para Birimi', value: 'currencyCode', checked: true },
      ];
    return listSourceLabels;
  }

  getImmColumns(): any[] {
    const immColumns: any[] =
      [
        { text: 'Issuer', dataField: 'issuer', width: 150, editable: false },
        { text: 'Başlangıç Tarihi', dataField: 'startDate', width: 100, editable: false, cellsFormat: 'D' },
        { text: 'Vade Sonu', dataField: 'maturityDate', width: 100, editable: false, cellsFormat: 'D' },
        {
          text: 'Durasyon', dataField: 'duration', width: 150, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalDuration']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        { text: 'Scenario', dataField: 'scenarioAmount', width: 100, editable: true, cellsFormat: 'f' },
        {
          text: 'Satılan Tutar', dataField: 'nominalAmount', width: 150, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalNominalAmount']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Fon Portföy Değeri', dataField: 'portfolioValue', width: 150, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioValue']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Geri Dönüş Tutarı', dataField: 'returnAmount', width: 150, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalReturnAmount']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'IRR', dataField: 'xIRR', width: 100, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalXIRR']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Faiz Oranı', dataField: 'interestRate', width: 100, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalInterestRate']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Değerleme Oranı', dataField: 'valuationRate', width: 150, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalValuationRate']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Portföy Durasyon', dataField: 'portfolioDuration', width: 150, editable: false, cellsFormat: 'n',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioDuration']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Faiz Port. Ağ.', dataField: 'portfolioInterestWeight', width: 100, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioInterestWeight']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Portföy Ağırlığı', dataField: 'portfolioWeight', width: 150, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioWeight']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Getiri (bps)', dataField: 'income', width: 100, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalIncome']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Faiz Portföy Getiri', dataField: 'portfolioInterestIncomeAsBPS', width: 150, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioInterestIncomeAsBPS']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Portföy Getiri', dataField: 'portfolioIncome', width: 100, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioIncome']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Orjinal Vade', dataField: 'originalDuration', width: 100, editable: false, cellsFormat: 'n',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalOriginalDuration']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }

        },
        { text: 'T-1 FPD', dataField: 'previousPortfolioValue', width: 100, editable: false, cellsFormat: 'f3' },
        { text: 'Para Birimi', dataField: 'currencyCode', width: 100, editable: false },
      ];
    return immColumns;
  }

  getIMMListSourceLabels(): any[] {
    const listSourceLabels: any[] =
      [
        { label: 'Issuer', value: 'issuer', checked: true },
        { label: 'Başlangıç Tarihi', value: 'startDate', checked: true },
        { label: 'Vade Sonu', value: 'maturityDate', checked: true },
        { label: 'Durasyon', value: 'duration', checked: true },
        { label: 'Scenario', value: 'scenarioAmount', checked: true },
        { label: 'Satılan Tutar', value: 'nominalAmount', checked: true },
        { label: 'Fon Portföy Değeri', value: 'portfolioValue', checked: true },
        { label: 'Geri Dönüş Tutarı', value: 'returnAmount', checked: true },
        { label: 'IRR', value: 'xIRR', checked: true },
        { label: 'Faiz Oranı', value: 'interestRate', checked: true },
        { label: 'Değerleme Oranı', value: 'valuationRate', checked: true },
        { label: 'Portföy Durasyon', value: 'portfolioDuration', checked: true },
        { label: 'Faiz Port. Ağ.', value: 'portfolioInterestWeight', checked: true },
        { label: 'Portföy Ağırlığı', value: 'portfolioWeight', checked: true },
        { label: 'Getiri (bps)', value: 'income', checked: true },
        { label: 'Faiz Portföy Getiri (bps)', value: 'portfolioInterestIncomeAsBPS', checked: true },
        { label: 'Portföy Getiri', value: 'portfolioIncome', checked: true },
        { label: 'Orjinal Vade', value: 'originalDuration', checked: true },
        { label: 'T-1 FPD', value: 'previousPortfolioValue', checked: true },
        { label: 'Para Birimi', value: 'currencyCode', checked: true },
      ];
    return listSourceLabels;
  }

  getTimeDepositsColumns(): any[] {
    const timeDepositsColumns: any[] =
      [
        { text: 'Issuer', dataField: 'issuer', width: 200, editable: false },
        { text: 'Başlangıç Tarihi', dataField: 'startDate', width: 100, editable: false, cellsFormat: 'D' },
        { text: 'Vade Sonu', dataField: 'maturityDate', width: 100, editable: false, cellsFormat: 'D' },
        {
          text: 'Durasyon', dataField: 'duration', width: 150, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalDuration']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        { text: 'Scenario', dataField: 'scenarioAmount', width: 100, editable: true, cellsFormat: 'f' },
        {
          text: 'Satılan Tutar', dataField: 'nominalAmount', width: 200, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalNominalAmount']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Fon Portföy Değeri', dataField: 'portfolioValue', width: 200, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioValue']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Geri Dönüş Tutarı', dataField: 'returnAmount', width: 150, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalReturnAmount']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'IRR', dataField: 'xIRR', width: 100, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalXIRR']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Faiz Oranı', dataField: 'interestRate', width: 100, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalInterestRate']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Değerleme Oranı', dataField: 'valuationRate', width: 150, editable: false, cellsFormat: 'f2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalValuationRate']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Portföy Durasyon', dataField: 'portfolioDuration', width: 150, editable: false, cellsFormat: 'n',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioDuration']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Faiz Port. Ağ.', dataField: 'portfolioInterestWeight', width: 100, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioInterestWeight']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Portföy Ağırlığı', dataField: 'portfolioWeight', width: 150, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioWeight']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Getiri (bps)', dataField: 'income', width: 100, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalIncome']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Faiz Portföy Getiri (bps)', dataField: 'portfolioInterestIncomeAsBPS', width: 100, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioInterestIncomeAsBPS']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Portföy Getiri', dataField: 'portfolioIncome', width: 100, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioIncome']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Orijinal Vade', dataField: 'originalDuration', width: 100, editable: false, cellsFormat: 'n',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalOriginalDuration']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }

        },
        { text: 'T1-FPD', dataField: 'previousPortfolioValue', width: 200, editable: false, cellsFormat: 'f3'},
        { text: 'Para Birimi', dataField: 'currencyCode', width: 100, editable: false },
      ];
    return timeDepositsColumns;
  }

  getTimeDepositsListSourceLabels(): any[] {
    const listSourceLabels: any[] =
      [
        { label: 'Issuer', value: 'issuer', checked: true },
        { label: 'Başlangıç Tarihi', value: 'startDate', checked: true },
        { label: 'Vade Sonu', value: 'maturityDate', checked: true },
        { label: 'Durasyon', value: 'duration', checked: true },
        { label: 'Scenario', value: 'scenarioAmount', checked: true },
        { label: 'Satılan Tutar', value: 'nominalAmount', checked: true },
        { label: 'Fon Portföy Değeri', value: 'portfolioValue', checked: true },
        { label: 'Geri Dönüş Tutarı', value: 'returnAmount', checked: true },
        { label: 'IRR', value: 'xIRR', checked: true },
        { label: 'Faiz Oranı', value: 'interestRate', checked: true },
        { label: 'Değerleme Oranı', value: 'valuationRate', checked: true },
        { label: 'Portföy Durasyon', value: 'portfolioDuration', checked: true },
        { label: 'Faiz Port. Ağ.', value: 'portfolioInterestWeight', checked: true },
        { label: 'Portföy Ağırlığı', value: 'portfolioWeight', checked: true },
        { label: 'Getiri (bps)', value: 'income', checked: true },
        { label: 'Faiz Portföy Getiri (bps)', value: 'portfolioInterestIncomeAsBPS', checked: true },
        { label: 'Portföy Getiri', value: 'portfolioIncome', checked: true },
        { label: 'Orjinal Vade', value: 'originalDuration', checked: true },
        { label: 'T-1 FPD', value: 'previousPortfolioValue', checked: true },
        { label: 'Para Birimi', value: 'currencyCode', checked: true },
      ];
    return listSourceLabels;
  }

  getEquityColumns(): any[] {
    const equityColumns: any[] =
      [
        { text: 'Security', dataField: 'securityName', width: 150, editable: false },
        { text: 'Ticker', dataField: 'marketCode', width: 100, editable: false },
        { text: 'Issuer', dataField: 'issuer', width: 150, editable: false },
        { text: 'Industry Sector', dataField: 'industrySectorStr', width: 150, editable: false },
        { text: 'Sub Sector', dataField: 'subSectorStr', width: 150, editable: false },
        { text: 'Scenario', dataField: 'scenarioAmount', width: 100, editable: true, cellsFormat: 'f' },
        {
          text: '# of Shares', dataField: 'nominalAmount', width: 200, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalNominalAmount']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Fon Portföy Değeri', dataField: 'portfolioValue', width: 200, editable: false, cellsFormat: 'f3',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioValue']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        { text: 'Valuation Price', dataField: 'valuationPrice', width: 150, editable: false , cellsFormat: 'f3'} ,
        {
          text: 'Getiri', dataField: 'income', width: 100, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalIncome']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Hisse Port. Getiri', dataField: 'equityPortfolioIncome', width: 150, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalEquityPortfolioIncome']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Portföy Getiri', dataField: 'portfolioIncome', width: 100, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioIncome']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Rakip Port. Getiri', dataField: 'competitorPortfolioIncome', width: 150, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalCompetitorPortfoliIncome']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }

        },
        {
          text: 'Hisse Port. Ağ.', dataField: 'equityPortfolioWeight', width: 150, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalEquityPortfolioWeight']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Portföy Ağırlığı', dataField: 'portfolioWeight', width: 150, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalPortfolioWeight']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        {
          text: 'Rakip Port. Ağırlığı', dataField: 'competitorPortfolioWeight', width: 150, editable: false, cellsFormat: 'p2',
          aggregates:
            [{
              'Total': (aggregatedValue: number, currentValue: number, column: any, record: any): number => record['totalCompetitorPortfolioWeight']
            }],
          aggregatesRenderer: (aggregates: any, column: any, element: any): string => {
            const renderStringEnd = aggregates.Total + '</div>';
            return this.renderStringStart + renderStringEnd;
          }
        },
        { text: 'Rakip Port. Ağ. Farkı', dataField: 'competitorPortfolioWeightDifference', width: 150, editable: false, cellsFormat: 'p2' },
        { text: 'T-1 Değerleme Fiyatı', dataField: 'previousPortfolioValue', width: 150, editable: false, cellsFormat: 'f2' },
        { text: 'Para Birimi', dataField: 'currencyCode', width: 100, editable: false },
      ];
    return equityColumns;
  }

  getEquitiesListSourceLabels(): any[] {
    const listSourceLabels: any[] =
      [
        { label: 'Security', value: 'securityName', checked: true },
        { label: 'Ticker', value: 'marketCode', width: 100, checked: true },
        { label: 'Issuer', value: 'issuer', checked: true },
        { label: 'Industry Sector', value: 'industrySectorStr', checked: true },
        { label: 'Sub Sector', value: 'subSectorStr', checked: true },
        { label: 'Scenario', value: 'scenarioAmount', checked: true },
        { label: '# of Shares', value: 'nominalAmount', checked: true },
        { label: 'Fon Portföy Değeri', value: 'portfolioValue', checked: true },
        { label: 'Valuation Price', value: 'valuationPrice', checked: true },
        { label: 'Getiri (bps)', value: 'income', checked: true },
        { label: 'Hisse Port. Getiri', value: 'equityPortfolioIncome', checked: true },
        { label: 'Portföy Getiri', value: 'portfolioIncome', checked: true },
        { label: 'Rakip Port. Getiri', value: 'competitorPortfolioIncome', checked: true },
        { label: 'Hisse Port. Ağ.', value: 'equityPortfolioWeight', checked: true },
        { label: 'Portföy Ağırlığı', value: 'portfolioWeight', checked: true },
        { label: 'Rakip Port. Ağırlığı', value: 'competitorPortfolioWeight', checked: true },
        { label: 'Rakip Port. Ağ. Farkı', value: 'competitorPortfolioWeightDifference', checked: true },
        { label: 'T-1 Değerleme Fiyatı', value: 'previousPortfolioValue', checked: true },
        { label: 'Para Birimi', value: 'currencyCode', checked: true }
      ];
    return listSourceLabels;
  }

}
