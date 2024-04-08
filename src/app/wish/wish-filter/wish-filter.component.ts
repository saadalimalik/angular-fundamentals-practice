import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WishItem } from '../models/wishItem';

const filters = [
    (item: WishItem) => item,
    (item: WishItem) => !item.isComplete,
    (item: WishItem) => item.isComplete,
];

@Component({
    selector: 'wish-filter',
    templateUrl: './wish-filter.component.html',
    styleUrl: './wish-filter.component.scss',
})
export class WishFilterComponent implements OnInit {
    listFilter: any = '0';

    @Input() filter: any;
    @Output() filterChange = new EventEmitter<any>();

    ngOnInit(): void {
        this.updateFilter('0');
    }

    updateFilter(value: any) {
        this.filter = filters[value];
        this.filterChange.emit(this.filter);
    }
}
