import { Component, Input } from '@angular/core';
import { EventService } from '../../../shared/services/EventService';
import { WishItem } from '../models/wishItem';

@Component({
    selector: 'wish-list-item',
    templateUrl: './wish-list-item.component.html',
    styleUrl: './wish-list-item.component.scss',
})
export class WishListItemComponent {
    @Input() wish!: WishItem;

    constructor(private events: EventService) {}

    get cssClasses() {
        // return this.fulfilled ? ['strikeout', 'text-muted'] : [];
        return {
            'strikeout text-muted': this.wish.isComplete,
        };
    }

    removeWish() {
        this.events.emit('removeWish', this.wish);
    }

    toggleFulfilled() {
        this.wish.isComplete = !this.wish.isComplete;
    }
}
