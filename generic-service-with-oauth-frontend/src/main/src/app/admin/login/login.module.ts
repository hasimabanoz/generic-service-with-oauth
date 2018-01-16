import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from '../../service/login.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, FormsModule],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
