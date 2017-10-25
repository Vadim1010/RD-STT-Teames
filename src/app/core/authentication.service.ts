import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { LoginForm } from '../shared/models';
import { appConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    pathLogin: string = 'login';
    pathLogout: string = 'logout';
    role: string;
    token: string;
    error: string;
    status: boolean;

    constructor(private httpService: HttpService) {
        this.status = (sessionStorage.getItem(appConfig.nameToken)) ? true : false;
    }

    login(value: LoginForm) {
        return this.httpService.postUser(this.toJson(value), this.pathLogin)
            .do((response) => {
                    sessionStorage.setItem(appConfig.nameToken, response.headers.get(appConfig.nameToken));
                    this.token = response.headers.get(appConfig.nameToken);
                    this.role = response.json();
                    this.status = true;
                }
            );
    }

    logout() {
        this.httpService.getLogout(this.pathLogout)
            .do((response) => {
                    console.log(response);

                }
            );
    };

    private toJson(data: LoginForm): string {
        return JSON.stringify(data);
    }
}