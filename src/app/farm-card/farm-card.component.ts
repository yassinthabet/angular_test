import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-farm-card',
  templateUrl: './farm-card.component.html',
  styleUrls: ['./farm-card.component.css']
})
export class FarmCardComponent {
  @Input() farm: any;
}
