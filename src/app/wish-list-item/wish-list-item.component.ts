import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import events from './../../shared/EventService';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.scss',
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  get cssClasses() {
    // return this.fulfilled ? ['strikeout', 'text-muted'] : [];
    return {
      'strikeout text-muted': this.wish.isComplete,
    };
  }

  removeWish() {
    events.emit('removeWish', this.wish);
  }

  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
