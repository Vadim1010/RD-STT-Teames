import {
    Component,
    ViewEncapsulation,
    OnInit, OnDestroy
} from '@angular/core';

import { iLoginForm } from '../models';

@Component({
    selector: 'tt-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy{

    constructor() {
    }

    ngOnInit () {

    }

    ngOnDestroy () {

    }

    submitLoginForm(value: iLoginForm) {

    }
}

