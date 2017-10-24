import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from "rxjs";
import { appConfig } from '../app.config';

@Injectable()
export class HttpService {
    constructor(private http: Http) { }

    postUser(value: string, path: string) {
        const HEADER: Headers = appConfig.header.getHeader(appConfig.header.json);
        const URL: string = appConfig.url.urlServer + appConfig.url.path + path;

        return this.http.post(URL, value, {headers: HEADER})
            .map(this.callbackMap)
            .catch(this.callbackError);
    }

    getLogout(path: string) {
        const HEADER: Headers = appConfig.header.getHeader(appConfig.header.token);
        const URL: string = appConfig.url + appConfig.url.path + path;

        return this.http.get(URL)
            .map(this.callbackMap)
            .catch(this.callbackError);
    }

    private callbackMap(response: Response) {
        return response;
    }

    private callbackError(error: Response) {
        console.log(error.json());
        return Observable.throw(error.json());
    }
}

