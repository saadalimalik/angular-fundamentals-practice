import { Component, Input } from '@angular/core';
import { WishItem } from '../models/wishItem';

@Component({
    selector: 'wish-list',
    templateUrl: './wish-list.component.html',
    styleUrl: './wish-list.component.scss',
})
export class WishListComponent {
    @Input() wishes: WishItem[] = [];
}
