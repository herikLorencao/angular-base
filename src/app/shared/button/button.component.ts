import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string;
  @Input() type = 'submit';
  @Input() style = 'primary';
  @Output('click') buttonClick = new EventEmitter();

  constructor() {}

  click() {
    this.buttonClick.emit();
  }
}
