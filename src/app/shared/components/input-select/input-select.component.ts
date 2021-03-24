import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent {
  @Input() label = 'label';
  @Input() display = 'value';
  @Input() control = null;
  @Input() options = [];
}
