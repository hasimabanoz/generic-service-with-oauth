import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FundsComponent } from './components/funds/funds.component';
import { SecurityRisksComponent } from './components/security-risks/security-risks.component';
import { FunctionsComponent } from './components/functions/functions.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'user' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'funds', component: FundsComponent },
      { path: 'functions', component: FunctionsComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
