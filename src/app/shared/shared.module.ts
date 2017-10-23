import { NgModule } from '@angular/core';
import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { InputModule } from './input/input.module';
import { LoginLayoutModule } from './login-layout';
import { ValidatorMessageModule } from "./validator-message";

@NgModule({
    imports: [
        HeaderModule,
        FooterModule,
        InputModule,
        LoginLayoutModule,
        ValidatorMessageModule
    ],
    exports: [
        HeaderModule,
        FooterModule,
        InputModule,
        LoginLayoutModule,
        ValidatorMessageModule
    ]
})
export class SharedModule {
}
