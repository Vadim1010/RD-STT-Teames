import { Component, ViewEncapsulation } from '@angular/core';

import { AuthenticationService } from '../../core/authentication.service';

@Component({
    selector: 'tt-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
    constructor(private authenticationService: AuthenticationService) {
    }

    submitLoginForm(value) {
        this.authenticationService.login(value);
    }
}
