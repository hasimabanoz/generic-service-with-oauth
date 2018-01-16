import { AuthResponse } from '../../entity/authResponse';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../../service/login.service';
import { UserCredential } from '../../entity/userCredential';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  userCredential: UserCredential = { username: '', password: '' };
  isLoginCredentialCorrect = false;
  errorMessage = '';
  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private _cookieService: CookieService
  ) { }

  ngOnInit() {
  }

  onLoggedin() {
    this.router.navigate(['/admin/user']);
    // if (this.userCredential.password === '' || this.userCredential.username === '') {
    //   this.isLoginCredentialCorrect = false;
    //   this.errorMessage = 'Geçerli kullanıcı adı veya şifre giriniz.';
    // } else {
    //   this.loginService.getAuthenticated(this.userCredential)
    //     .then(
    //       (res: AuthResponse) => {

    //         this.isLoginCredentialCorrect = true;
    //         this._cookieService.put('Token', res.access_token);
    //         this._cookieService.put('isLoggedin', 'true');
    //         this._cookieService.put('username', this.userCredential.username);
    //         const that = this;
    //         setTimeout(function () {
    //           that.router.navigate(['/admin/'], { relativeTo: that.route });
    //         }, 500);

    //       }
    //     )
    //     .catch(
    //     (res: Response) => {
    //       if (res.status === 400) {
    //         this.isLoginCredentialCorrect = false;
    //         this.errorMessage = 'Yanlış kullanıcı adı veya şifre girdiniz.';
    //       }
    //     }
    //     );
    // }
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.onLoggedin();
    }
  }

}
