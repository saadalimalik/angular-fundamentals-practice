import { AbstractControl, ValidationErrors } from '@angular/forms';

export function createInvalidEmailDomainValidator(hosts: string[]) {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control?.value;

        if (!value) {
            return null;
        }

        const matches = hosts.some((host) => value.indexOf(host) > -1);

        return matches ? { invalidEmailDomain: true } : null;
    };
}
