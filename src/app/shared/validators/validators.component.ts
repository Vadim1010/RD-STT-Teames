import { Component, ViewEncapsulation, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

import { appConfig } from '../../app.config';

@Component({
    selector: 'tt-error-message',
    templateUrl: 'validators.component.html',
    styleUrls: ['validators.component.scss'],
    encapsulation: ViewEncapsulation.Native
})
export class ValidatorsComponent {
    @Input()
    private control: AbstractControlDirective | AbstractControl;

    errorMessage = appConfig.errorMessage;

    ngOnInit() {
        // console.log(this.control);
    }
}
