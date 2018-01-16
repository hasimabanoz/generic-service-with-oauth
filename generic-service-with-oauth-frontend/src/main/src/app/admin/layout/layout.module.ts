import {AppModule} from '../../app.module';
import {LoginService} from '../../service/login.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HeaderComponent} from './components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
  ],
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
})
export class LayoutModule {}
