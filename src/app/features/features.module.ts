import { NgModule } from '@angular/core';

import { LoginModule } from './login';
import { HomeModule } from './home';

@NgModule({
    imports: [
        LoginModule,
        HomeModule
    ],
    exports: [
        LoginModule,
        HomeModule
    ]
})
export class FeaturesModule {
}
