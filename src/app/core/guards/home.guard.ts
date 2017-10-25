import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HomeGuard implements CanActivate {
    private isLogin: boolean;

    constructor(private auth: AuthenticationService,
                private router: Router) {
    }

    canActivate(): Observable<boolean> | boolean {
        this.isLogin = this.auth.status;

        if (this.isLogin) {
            console.log(this.auth);
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
