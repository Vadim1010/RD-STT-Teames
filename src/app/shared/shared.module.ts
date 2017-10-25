import { NgModule } from '@angular/core';
import { HeaderModule } from './header';
import { FooterModule } from './footer';
import { InputModule } from './input/input.module';
import { LoginLayoutModule } from './login-layout';
import { ValidatorsModule } from './validators';
import { ButtonModule } from './button';

@NgModule({
    imports: [
      HeaderModule,
      FooterModule,
      InputModule,
      LoginLayoutModule,
      ValidatorsModule,
      ButtonModule
    ],
    exports: [
      HeaderModule,
      FooterModule,
      InputModule,
      LoginLayoutModule,
      ValidatorsModule,
      ButtonModule
  ]
})
export class SharedModule {
}
