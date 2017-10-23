import { Component, ViewEncapsulation } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Component({
    selector: 'tt-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
    error;

    constructor(private authenticationService: AuthenticationService) {
    }

    submitLoginForm(value) {
        this.authenticationService.getForm(value);
    }

}
