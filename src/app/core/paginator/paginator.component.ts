import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';

@Component({
  selector   : 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls  : ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  @Input() disabled:boolean = false;

  @Output() onPageClicked: EventEmitter<any> = new EventEmitter<any>();

  pageList: number[] = [];

  constructor () {
  }

  ngOnInit () {
  }

  ngOnChanges (changes: { [propName: string]: SimpleChange }) {
    if (changes['totalPages'] && !changes['totalPages'].isFirstChange()) {
      this.pageList = Array.from({ length: changes['totalPages'].currentValue }, (v, k) => k + 1);
    }
  }

  pageClicked (pageNumber) {
    if(pageNumber !== this.currentPage && !this.disabled) {
      this.onPageClicked.emit(pageNumber);
    }
  }

}
