import { routerTransition } from '../../router.animations';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [routerTransition()]
})
export class UserComponent implements OnInit {
  public loading = false;
  constructor(private toastr: ToastrService) {
  }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.toastr.success('Users loaded');
      this.loading = false;
    }, 2000);
  }

}
