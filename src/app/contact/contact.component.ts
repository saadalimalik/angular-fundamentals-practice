import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactComponent {
    contactForm = new FormGroup({
        senderName: new FormControl(''),
        senderEmail: new FormControl(''),
        senderMessage: new FormControl(''),
    });

    submitForm() {
        if (this.contactForm.valid) {
            console.log(this.contactForm.value);
        }
    }
}
