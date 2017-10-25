import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ValidatorsComponent } from './validators.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ValidatorsComponent
  ],
  exports: [ValidatorsComponent],
})
export class ValidatorsModule {
}
