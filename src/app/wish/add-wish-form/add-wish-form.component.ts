import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../models/wishItem';

@Component({
    selector: 'add-wish-form',
    templateUrl: './add-wish-form.component.html',
    styleUrl: './add-wish-form.component.scss',
})
export class AddWishFormComponent {
    @Output() addWish = new EventEmitter<WishItem>();

    newWishText: string = '';

    addNewWish() {
        this.addWish.emit(new WishItem(this.newWishText));
        this.newWishText = '';
    }
}
