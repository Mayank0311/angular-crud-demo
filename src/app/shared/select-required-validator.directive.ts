import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appSelectRequiredValidator]',
    providers: [
        {
            multi: true,
            provide: NG_VALIDATORS,
            useExisting: SelectRequiredValidatorDirective
        }
    ]
})
export class SelectRequiredValidatorDirective implements Validator {
    @Input() appSelectRequiredValidator: string;
    validate(control: AbstractControl): { [key: string]: any; } | null {
        return control.value === this.appSelectRequiredValidator ? { 'defaultSelected': true } : null;
    }
}
