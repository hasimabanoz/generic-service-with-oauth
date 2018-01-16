import { SecurityRisksDtService } from './../../service/security-risks-dt-service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTabsModule } from '@angular/material';

import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { FundsComponent } from './components/funds/funds.component';
import { FunctionsComponent } from './components/functions/functions.component';
import { FundSummaryComponent } from './components/fund-summary/fund-summary.component';
import { SecurityRisksComponent } from './components/security-risks/security-risks.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ImportComponent } from './components/import/import.component';

import { LayoutRoutingModule } from './layout-routing.module';


import { jqxDataTableComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxdatatable';
import { jqxListBoxComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxlistbox';
import { jqxButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons';
import { jqxPopoverComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxpopover';



@NgModule({
  imports: [
    CommonModule, FormsModule, LayoutRoutingModule, MatTabsModule, NgxChartsModule 
  ],
  declarations: [
    DashboardComponent,
    LayoutComponent,
    BannerComponent,
    FooterComponent,
    FundsComponent,
    FunctionsComponent,
    FundSummaryComponent,
    ImportComponent,
    SecurityRisksComponent,
    jqxDataTableComponent,
    jqxListBoxComponent,
    jqxButtonComponent,
    jqxPopoverComponent
  ],
  providers: [SecurityRisksDtService],
  bootstrap: [],
})
export class LayoutModule { }
