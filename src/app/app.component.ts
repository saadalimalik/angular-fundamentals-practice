import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
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
  listFilter: string = '0';
  newWishText: string = '';
  visibleItems: WishItem[] = this.items;

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  filterChanged(filter: string) {
    if (filter === '0') this.visibleItems = this.items;
    else if (filter === '1')
      this.visibleItems = this.items.filter((item) => !item.isComplete);
    else this.visibleItems = this.items.filter((item) => item.isComplete);
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
