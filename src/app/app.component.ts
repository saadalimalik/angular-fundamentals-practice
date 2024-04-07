import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import events from './../shared/EventService';

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
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Start development journey', true),
    new WishItem('Learn Frontend frameworks'),
    new WishItem('Get really good at programming'),
    new WishItem('Become an accomplished individual'),
  ];

  listFilter: any;

  constructor() {
    events.listen('removeWish', (wish: WishItem) => {
      const deleteIndex = this.items.indexOf(wish);
      this.items.splice(deleteIndex, 1);
    })
  }
}
