import { NgModule } from '@angular/core';
import { LoginModule } from './login/index'

@NgModule({
  imports: [ LoginModule ],
  exports: [ LoginModule ]
})
export class FeaturesModule { }
