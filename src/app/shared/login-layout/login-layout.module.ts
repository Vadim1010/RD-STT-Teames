﻿import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { LoginLayoutComponent } from './login-layout.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoginLayoutComponent
  ],
  exports: [LoginLayoutComponent],
})
export class LoginLayoutModule {}

