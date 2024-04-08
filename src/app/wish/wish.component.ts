import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/services/EventService';
import { WishService } from './wish.service';
import { WishItem } from './models/wishItem';

@Component({
    selector: 'app-wish',
    templateUrl: './wish.component.html',
    styleUrl: './wish.component.scss',
})
export class WishComponent implements OnInit {
    items: WishItem[] = [];

    listFilter: any;

    constructor(events: EventService, private wishService: WishService) {
        events.listen('removeWish', (wish: WishItem) => {
            const deleteIndex = this.items.indexOf(wish);
            this.items.splice(deleteIndex, 1);
        });
    }

    ngOnInit(): void {
        this.wishService.getWishes().subscribe({
            next: (response: any) => {
                this.items = response;
            },
            error: (error) => {
                alert(error.message);
            },
        });
    }
}
