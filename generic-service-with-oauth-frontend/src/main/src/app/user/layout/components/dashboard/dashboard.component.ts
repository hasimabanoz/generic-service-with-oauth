import { UserSharedService } from './../../../../service/user-shared.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Fund } from '../../../../entity/fund';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  view: any[] = [900, 500];
  chartType = 'Advance';
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Varlıklar';
  showXAxisLabel = true;
  xAxisLabel = 'Varlık';
  showYAxisLabel = true;
  yAxisLabel = 'Fon Portföy Değeri';
  fundList: Fund[];

  colorScheme = {
    domain: ['#66BD6D', '#FAA026', '#29BB9C', '#E96B56', '#55ACD2', '#FAC51D']
  };

  // line, area
  autoScale = true;
  constructor(private userSharedService: UserSharedService) {
  }

  ngOnInit() {
    this.generateGraphicData(null);
  }

  async generateGraphicData(value) {
    // tslint:disable-next-line:typeof-compare
    value = typeof value === undefined || value === null ? 'totalPortfolioValue' : value;
    this.fundList = await this.userSharedService.getFunds();
    this.fundList.forEach(fund => {
      if (fund.fundTotal > 0) {
        fund.singleGraphicData = [{
          name: 'Devlet Bonosu',
          value: fund.bond.govBond[value]
        }, {
          name: 'Şirket Bonosu',
          value: fund.bond.corpBond[value]
        }, {
          name: 'Ters Repo',
          value: fund.repo[value]
        }, {
          name: 'BPP',
          value: fund.imm[value]
        }, {
          name: 'Mevduat',
          value: fund.timeDeposit[value]
        }, {
          name: 'Hisse Senedi',
          value: fund.equity[value]
        }];
        console.log( fund.singleGraphicData );
      }
    });
  }
  onSelect(event) {
    console.log(event);
  }
  changeChartValue(value) {
    this.generateGraphicData(value);
  }
  changeChart(value) {
    this.chartType = value;
  }


}
