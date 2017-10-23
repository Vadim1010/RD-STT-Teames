import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class ResourceService {
    private url: string = "http://epuadniw0050t1.kyiv.epam.com/testingtool/jsonDoc#/rest/login";

    constructor(private http: Http) {
    }

}