
import { Component, OnInit, Input } from '@angular/core';

import { Fund } from '../../../../entity/fund';

@Component({
  selector: 'app-fund-summary',
  templateUrl: './fund-summary.component.html',
  styleUrls: ['./fund-summary.component.css']
})
export class FundSummaryComponent implements OnInit {

  @Input() selectedFund: Fund;

  showCell(asset: any, columnName: string): string {
    if (asset[columnName]) {
      return asset[columnName];
    } else {
      return '';
    }

  }
  constructor() { }

  ngOnInit() {

  }

}
