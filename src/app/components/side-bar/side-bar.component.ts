import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(1%)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(1%)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(-100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class SideBarComponent {
  @Input() display: boolean = false;
  @Output() atTopBarClick: EventEmitter<boolean> = new EventEmitter();

  menuItems: any[] = [
    {
      label: 'Finanças',
      route: '/financas',
      icon: 'payments',
    },
    {
      label: 'Clientes',
      route: '/clientes',
      icon: 'group',
    },
    {
      label: 'Fornecedores',
      route: '/fornecedores',
      icon: 'outpatient',
    },
  ];

  showTopBar() {
    this.atTopBarClick.emit(true);
  }
}
