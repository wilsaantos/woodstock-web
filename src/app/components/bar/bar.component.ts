import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarService } from 'src/app/services/bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
  displayTopBar: boolean = true;
  displaySideBar: boolean = false;

  constructor(protected barService: BarService) {}

  ngOnInit(): void {
    this.displaySubscriber();
  }

  displaySubscriber() {
    this.barService.displaySideBarEmitter.subscribe((display) => {
      this.displaySideBar = display;
      this.displayTopBar = !display;
    });

    this.barService.displayTopBarEmitter.subscribe((display) => {
      this.displayTopBar = display;
      this.displaySideBar = !display;
    });
  }

  /* displayUnsubscriber() {
    this.barService.displaySideBarEmitter.unsubscribe();
    this.barService.displayTopBarEmitter.unsubscribe();
  }

  ngOnDestroy(): void {
    this.displayUnsubscriber();
  } */

  showSideBar(event: boolean) {
    this.barService.displaySideBarEmitter.emit(event);
  }
  showTopBar(event: boolean) {
    this.barService.displayTopBarEmitter.emit(event);
  }
}
