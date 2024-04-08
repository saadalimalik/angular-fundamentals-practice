import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createInvalidEmailDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidEmailDomainValidator([
    'google.com',
    'yahoo.com',
    'outlook.com',
]);

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactComponent {
    contactForm = new FormGroup({
        senderName: new FormControl('', Validators.required),
        senderEmail: new FormControl('', [
            Validators.required,
            Validators.email,
            invalidEmailDomain,
        ]),
        senderMessage: new FormControl('', [
            Validators.required,
            Validators.minLength(15),
        ]),
    });

    submitForm() {
        if (this.contactForm.valid) {
            console.log(this.contactForm.value);
        }
    }
}
