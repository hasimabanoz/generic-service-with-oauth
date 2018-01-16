import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GameRoutingModule} from './game-routing.module';
import { GameComponent } from './game.component';
import { LoadingModule } from 'ngx-loading';
@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    LoadingModule,
  ],
  declarations: [
    GameComponent
  ]
})
export class GameModule {}
