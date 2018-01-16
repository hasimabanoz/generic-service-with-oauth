import { Injectable } from '@angular/core';
import { CONSTANTS } from './constants';
import { CookieService } from 'ngx-cookie';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import { Bonds } from '../entity/assets/bonds';
import {StatusResponse} from '../entity/assets/statusResponse';
@Injectable()
export class BondService {
    private serviceUrl = CONSTANTS.server + '/services/bond';
    private access_token: string;
    private headers: Headers = new Headers();
    constructor(
        private http: Http,
        private _cookieService: CookieService
    ) {
      this.createHeader();
    }
    createHeader() {
      this.access_token = this._cookieService.get('Token');
      this.headers = new Headers();
      this.headers.append('Authorization', 'Bearer ' + this.access_token);
      this.headers.append('Content-Type', 'application/json');
    }
    getBonds(): Promise<Array<Bonds>> {
      this.createHeader();
      return this.http
        .get(this.serviceUrl, {headers: this.headers})
        .toPromise()
        .then((response) => {
          return response.json() as Bonds[];
        })
        .catch(this.handleError);
    }
    getBond(id: number): Promise<Bonds> {
      return this.getBonds()
        .then(bonds => bonds.find(bond => bond.id === id));
    }
    save(bond: Bonds): Promise<Bonds> {
      return this.post(bond);
    }
    delete(bond: Bonds): Promise<StatusResponse> {
      const url = `${this.serviceUrl}/${bond.id}`;
      return this.http
        .delete(url, {headers: this.headers})
        .toPromise()
        .then((response) => {
          return response.json() as StatusResponse;
        })
        .catch(this.handleError);
    }
    // Add new bond
    private post(bond: Bonds): Promise<Bonds> {
      return this.http
        .post(this.serviceUrl, JSON.stringify(bond), {headers: this.headers})
        .toPromise()
        .then(res => res.json())
        .catch(this.handleError);
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
