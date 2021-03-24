import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent {
  @Input() label = 'label';
  @Input() file = null;
  @Output() fileChange = new EventEmitter<any>();
}
