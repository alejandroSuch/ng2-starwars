import {Component, OnInit, Input, HostListener, Output, EventEmitter} from "@angular/core";
import {PaginatorService} from "../paginator.service";

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.css']
})
export class PageItemComponent implements OnInit {
  @Input() page: number;
  @Input() isLast: boolean = false;

  @Output() onLastInitialized: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('click') onClick = function () {
    this
      .paginatorService
      .announcePageClicked(this.page);
  };

  isActive: boolean = false;

  constructor(private paginatorService: PaginatorService) {
    this.paginatorService
      .$pageChangeAnnounced
      .subscribe((pageNumber) => {
        this.isActive = pageNumber == this.page;
      });
  }

  ngOnInit() {
    if (this.isLast) {
      setTimeout(() => this.onLastInitialized.emit(true));
    }
  }
}
