import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from "rxjs";
import { appConfig } from '../app.config';

@Injectable()
export class HttpService {
    private URL: string = appConfig.url.urlServer;
    private HEADER: Headers = appConfig.header;

    constructor(private http: Http) {

    }

    getUsers(value: string, path: string) {
        return this.http.post(this.URL + appConfig.url.path + path, value, {headers: this.HEADER})
            .map(this.callbackMap)
            .catch(this.callbackError);
    }

    // getToken(value) {
    //
    //     return this.http.get(this.URL + appConfig.url.path, {x-token: value})
    //         .map(this.callbackMap)
    //         .catch(this.callbackError);
    // }

    private callbackMap(response: Response) {
        return response;
    }

    private callbackError(error: Response) {
        return Observable.throw(error.json());
    }
}

