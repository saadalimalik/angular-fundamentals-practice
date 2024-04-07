import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.scss',
})
export class WishListItemComponent {
  @Input() wishText!: any;

  @Input() fulfilled!: any;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    // return this.fulfilled ? ['strikeout', 'text-muted'] : [];
    return {
      'strikeout text-muted': this.fulfilled,
    };
  }

  toggleFulfilled() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }
}
