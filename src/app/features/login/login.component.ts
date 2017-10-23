import {
    Component,
    ViewEncapsulation,
    OnInit, OnDestroy
} from '@angular/core';

import { LoginForm } from '../models';
import { LoginService } from './login.service';

@Component({
    selector: 'tt-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {

    constructor(private loginService: LoginService) {
    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }

    submitLoginForm(value: LoginForm) {
        this.loginService.getForm(value);
    }
}

