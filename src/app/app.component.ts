import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Start development journey', true),
    new WishItem('Learn Frontend frameworks'),
    new WishItem('Get really good at programming'),
    new WishItem('Become an accomplished individual')
  ]
  
  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
