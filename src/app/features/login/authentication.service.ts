import { Injectable } from "@angular/core";

import { HttpService } from '../../core/http.service';
import { LoginForm } from '../../shared/models';
import { appConfig } from '../../app.config';

@Injectable()
export class AuthenticationService {
    pathLogin: string = 'login';
    role: string;
    token: string;
    error: string;
    status: boolean = false;

    constructor(private httpService: HttpService) {
    }

    login(value: LoginForm) {
        this.httpService.postUser(this.toJson(value), this.pathLogin)
            .subscribe(
                (res) => {
                    console.log(res);
                    sessionStorage.setItem(appConfig.nameToken, res.headers.get(appConfig.nameToken));
                    // this.httpService.TOKEN = res.headers.get(appConfig.nameToken);
                    this.token = res.headers.get(appConfig.nameToken);
                    this.role = res.json();
                    this.status = true;
                },
                (error) => {
                    this.error = error.message;
                }
            );
    }




    toJson(data: LoginForm): string {
        return JSON.stringify(data);
    }
}