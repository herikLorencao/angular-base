import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>',
})
export abstract class BaseFormComponent {
  form: FormGroup;

  constructor() {}

  abstract submit();

  onSubmit() {
    if (this.form.valid) {
      this.submit();
    } else {
      this.form.markAllAsTouched();
    }
  }

  reset() {
    this.form.reset();
  }

  getField(fieldName: string) {
    return this.form.get(fieldName);
  }

  isValidField(fieldName: string) {
    const field = this.form.get(fieldName);
    return !(!field.valid && field.touched);
  }
}
