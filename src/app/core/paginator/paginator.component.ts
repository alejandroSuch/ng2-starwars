import {Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter} from "@angular/core";
import {PaginatorService} from "./paginator.service";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
  providers: [PaginatorService]
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  @Input() disabled: boolean = false;

  @Output() onPaginate: EventEmitter<any> = new EventEmitter<any>();

  pageList: number[] = [];

  constructor(private paginatorService: PaginatorService) {
    this
      .paginatorService
      .$pageClickAnnounced
      .subscribe((page) => {
        if (page !== this.currentPage && !this.disabled) {
          this
            .onPaginate
            .emit(page);

          this
            .paginatorService
            .announcePageChanged(page);
        }
      });
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    if (changes['currentPage']) {
      this
        .paginatorService
        .announcePageChanged(changes['currentPage'].currentValue);
    }

    if (changes['totalPages'] && !changes['totalPages'].isFirstChange()) {
      this.pageList = Array.from({length: changes['totalPages'].currentValue}, (v, k) => k + 1);
    }
  }

  ngOnInit() {
  }

  afterListItemsInitialized() {
    this
      .paginatorService
      .announcePageChanged(this.currentPage);
  }
}
