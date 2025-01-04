import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { UploaderComponent } from '../uploader/uploader.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, UploaderComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  private formBuilder = inject(NonNullableFormBuilder);

  form = this.formBuilder.group({
    avatar: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    github: ['', [Validators.required]],
  });

  onSubmit(event: Event) {
    event.preventDefault();

    this.form.updateValueAndValidity();
    this.form.markAllAsTouched();
  }
}
