import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Start development journey', true),
    new WishItem('Learn Frontend frameworks'),
    new WishItem('Get really good at programming'),
    new WishItem('Become an accomplished individual'),
  ];
  listFilter: any = '0';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }
}
