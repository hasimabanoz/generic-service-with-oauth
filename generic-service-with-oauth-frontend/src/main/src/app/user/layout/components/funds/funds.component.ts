import { UserSharedService } from './../../../../service/user-shared.service';
import { Component, OnInit } from '@angular/core';
import { Fund } from '../../../../entity/fund';
import { MatTabsModule } from '@angular/material';
import { FundService } from '../../../../service/fund.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

  selectedFund: Fund;

  fundList: Fund[];

  activeChildTab = 'summary';

  constructor(private userSharedService: UserSharedService) { }

  async ngOnInit() {
    await this.getFunds();
  }


  private async getFunds() {
    try {
      if (this.userSharedService.user !== undefined) {
        this.fundList = this.userSharedService.user.funds;
        console.log('user: ' + this.userSharedService.user);
      } else {
        console.log('servis ');
        this.fundList = await this.userSharedService.getFunds();
      }

      if (this.fundList && this.fundList.length > 0) {
        this.selectedFund = this.fundList[0];
      }
    } catch (error) {
      console.log('Hata!!: ' + error);
    }
  }
}
