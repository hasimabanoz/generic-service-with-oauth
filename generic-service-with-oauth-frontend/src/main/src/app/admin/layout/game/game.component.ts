import { routerTransition } from '../../router.animations';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [routerTransition()]
})
export class GameComponent implements OnInit {
  public loading = false;
  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.toastr.success('Games loaded');
      this.loading = false;
    }, 2000);
  }
}
