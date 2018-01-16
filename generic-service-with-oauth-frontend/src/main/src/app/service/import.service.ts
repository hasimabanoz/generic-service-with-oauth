import { Fund } from './../entity/fund';
import { StatusResponse } from './../entity/assets/statusResponse';
import { CONSTANTS } from './constants';
import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { CookieService } from 'ngx-cookie';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ImportService {

  private serviceUrl = CONSTANTS.server + '/services/import';
  private access_token: string;
  private headers: Headers = new Headers();

  constructor(private http: Http, private _cookieService: CookieService) {
    this.createHeader();
  }
  createHeader() {
    this.access_token = this._cookieService.get('Token');
    this.headers = new Headers();
    this.headers.append('Authorization', 'Bearer ' + this.access_token);
    this.headers.append('Content-Type', 'multipart/form-data');
  }
  importPriceFile(fileToUpload) {
    const url = this.serviceUrl + '/price';
    this.createHeader();

    const file: File = fileToUpload;
    const formData: FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const options = new RequestOptions({ headers: this.headers });
    this.http.post(url, formData, options)
      .subscribe(
      data => alert('success'),
      error => alert(error)
      );
  }
  importAmountFile(fileToUpload) {
    const url = this.serviceUrl + '/amount';
    this.createHeader();

    const file: File = fileToUpload;
    const formData: FormData = new FormData();
    formData.append('uploadFile', file, file.name);
    const options = new RequestOptions({ headers: this.headers });
    this.http.post(url, formData, options)
      .subscribe(
      data => alert('success'),
      error => alert(error)
      );
  }
  reset() {
    const url = this.serviceUrl + '/reset';
    this.createHeader();
    this.http.get(url, { headers: this.headers })
      .subscribe(
      data => alert('success'),
      error => alert(error)
      );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    if (error.status === 401) {
      this._cookieService.removeAll();
      window.location.href = '/userlogin';
    }
    return Promise.reject(error.message || error);
  }

}
