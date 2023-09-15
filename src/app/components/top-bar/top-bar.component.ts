import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateY(1%)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(1%)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateY(-100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class TopBarComponent {
  @Input() display: Boolean = true;
  //@Input() displaySideBar: boolean = false;
  @Output() atSideBarClick: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router) {}

  showSideBar() {
    this.atSideBarClick.emit(true);
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
