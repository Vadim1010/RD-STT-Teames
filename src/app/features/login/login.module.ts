import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent  } from './login.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [
    LoginComponent
  ],
  exports: [LoginComponent],
})
export class LoginModule {
}
