import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageableList } from '../../models/list';

export enum Direction { backward, forward }

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() source: PageableList<any>;

  @Output() update = new EventEmitter<Direction>();

  constructor() { }

  next() {
    this.update.emit(Direction.forward);
  }

  previous() {
    this.update.emit(Direction.backward);
  }

}
