import { User } from '../entity/user';

import { Fund } from './../entity/fund';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
@Injectable()
export class UserSharedService {
    funds: Fund[];
    user: User;
    constructor(private userService: UserService) {
        this.getUser();
    }

    async getFunds(): Promise<Fund[]> {
        console.log('get funds');

        await this.getUser();
        this.funds = this.user.funds;
        return this.funds;
    }

    async getUser() {
        console.log('get user');
        if (this.user === undefined) {
            this.user = await this.userService.getLoggedInUser();
        }


    }


}