import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginLayoutComponent } from './login-layout.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    LoginLayoutComponent
  ],
  exports: [LoginLayoutComponent],
})
export class LoginLayoutModule {}

