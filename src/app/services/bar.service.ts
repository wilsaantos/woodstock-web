import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BarService {
  displaySideBarEmitter: EventEmitter<boolean> = new EventEmitter();
  displayTopBarEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor() {}
}
