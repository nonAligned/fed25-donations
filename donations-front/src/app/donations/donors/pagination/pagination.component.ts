import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sco-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() listSize: number;
  @Input() pageSize: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changePage(page: number) {
    this.pageChanged.emit(page);
  }

}
