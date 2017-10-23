import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common'

import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared';
import { AuthenticationService } from './authentication.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent],
    providers: [AuthenticationService]
})
export class LoginModule {
}
