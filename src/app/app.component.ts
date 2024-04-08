import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { EventService } from '../shared/services/EventService';
import { WishService } from '../shared/services/wish.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        WishListComponent,
        AddWishFormComponent,
        WishFilterComponent,
    ],
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
