import { Injectable } from "@angular/core";

import { ResourceService } from '../../core';
import { LoginForm } from '../models';

@Injectable()

export class LoginService {

    constructor(private resourceService: ResourceService) {
    }

    getForm(value: LoginForm): void {
        this.resourceService.getAll(this.toJson(value))
            .subscribe((res) => {
                console.log(res);
            }),
            (error) => {
                console.log(error)
            };
    }

    toJson(data: LoginForm): string {
        return JSON.stringify(data);
    }
}