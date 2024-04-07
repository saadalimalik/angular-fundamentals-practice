import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.scss'
})
export class WishListItemComponent {
  @Input() wishText!: any;

  @Input() fulfilled!: any;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  toggleFulfilled() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }
}
