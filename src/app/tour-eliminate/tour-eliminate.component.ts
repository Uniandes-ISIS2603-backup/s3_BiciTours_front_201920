import { Component, OnInit, Input } from '@angular/core';
import { openCloseAnimation, openCloseShadeAnimation } from './animations';

@Component({
  selector: 'app-tour-eliminate',
  templateUrl: './tour-eliminate.component.html',
  styleUrls: ['./tour-eliminate.component.scss'],
  animations: [
    openCloseAnimation,
    openCloseShadeAnimation,
  ]
})
export class TourEliminateComponent {

  @Input() isOpen = false;

}
