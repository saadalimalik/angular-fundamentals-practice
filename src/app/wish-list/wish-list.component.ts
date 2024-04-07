import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { WishListItemComponent } from "../wish-list-item/wish-list-item.component";

@Component({
    selector: 'wish-list',
    standalone: true,
    templateUrl: './wish-list.component.html',
    styleUrl: './wish-list.component.scss',
    imports: [CommonModule, WishListItemComponent]
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];
}
