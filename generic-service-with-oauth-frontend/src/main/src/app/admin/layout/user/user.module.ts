import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import { UserComponent } from './user.component';
import { LoadingModule } from 'ngx-loading';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    LoadingModule,
  ],
  declarations: [
    UserComponent,
  ]
})
export class UserModule {}
