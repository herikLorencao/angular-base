import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

import { InputErrorMessage } from '../../../utils/input-error-message';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: INPUT_FIELD_VALUE_ACCESSOR,
})
export class InputComponent {
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() readonly = false;
  @Input() valid: boolean;
  @Input() control: FormControl;

  private innerValue = '';

  getErrorMessage() {
    const errors = Object.keys(this.control.errors);
    return InputErrorMessage[errors[0]] ?? 'O valor do campo é inválido';
  }

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: (_: any) => void = () => {};

  writeValue(value: any): void {
    this.innerValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.readonly = isDisabled;
  }
}
