import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from "rxjs";
import { LoginForm } from '../features/models';
@Injectable()
export class ResourceService {
    private nameToken: string;
    private valueToken: string;
    private URL: string = "http://epuadniw0050t1.kyiv.epam.com/testingtool/rest/login";
    private HEADER: Headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    private HEADER_AND_TOKEN: Headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});

    constructor(private http: Http) {

    }

    getAll(value: string) {
        return this.http.post(this.URL, value, {headers: this.HEADER})
            .map(this.callbackMap)
            .catch((error) => {
                console.log(error);
                return error;
            });
    }

    private callbackMap(response: Response) {
        console.log(response.headers.get('x-token'));
        return response.json();
    }

}