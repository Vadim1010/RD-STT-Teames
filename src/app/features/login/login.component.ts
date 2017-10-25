import { Component, ViewEncapsulation, OnDestroy, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AuthenticationService } from '../../core';
import { appConfig } from '../../app.config';
import { Subscription } from 'rxjs';

import 'uui-framework/uui/js/uui-core.min';

@Component({
    selector: 'tt-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnDestroy {
    private warningMsg: string = appConfig.loginWarningMsg;
    subscription: Subscription;

    constructor(private authenticationService: AuthenticationService,
                private router: Router,
                public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };

    submitLoginForm(value) {
        this.subscription = this.authenticationService.login(value)
            .subscribe((res) => this.router.navigate(['/home']),
                (error) => this.toastr.error(error, 'Error!'));
    };

    logout() {
        // this.subscription.add(this.authenticationService.logout().subscribe());
    };

    epamLogin() {
        console.log('epam Login');
    };

}
