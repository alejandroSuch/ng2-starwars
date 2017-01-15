import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class PaginatorService {
  private pageChangeAnnouncedSource = new Subject<number>();
  private pageClickAnnouncedSource = new Subject<number>();

  $pageChangeAnnounced = this.pageChangeAnnouncedSource.asObservable();
  $pageClickAnnounced = this.pageClickAnnouncedSource.asObservable();

  constructor() {
  }

  announcePageChanged(page: number) {
    this.pageChangeAnnouncedSource.next(page);
  }

  announcePageClicked(page: number) {
    this.pageClickAnnouncedSource.next(page);
  }

}
