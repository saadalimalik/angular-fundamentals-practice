import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventService } from '../shared/services/EventService';
import { WishModule } from './wish/wish.module';
import { WishService } from './wish/wish.service';
import { WishItem } from './wish/models/wishItem';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, WishModule],
})
export class AppComponent implements OnInit {
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
