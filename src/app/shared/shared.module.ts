import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ButtonComponent, InputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ButtonComponent, InputComponent],
})
export class SharedModule {}
