import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorMessageComponent } from './validator-message.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        ValidatorMessageComponent
    ],
    exports: [ ValidatorMessageComponent ]
})
export class ValidatorMessageModule {
}