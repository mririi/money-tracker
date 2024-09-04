import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomCardComponent {
  @Input() header: string = "No Header";
  @Input() content: string = "No Content";

}
