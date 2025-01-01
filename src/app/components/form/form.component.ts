import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../input/input.component';

type Form = {
  avatar: FormControl<string>;
  fullName: FormControl<string>;
  email: FormControl<string>;
  github: FormControl<string>;
};

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group<Form>({
    avatar: this.formBuilder.nonNullable.control('', [Validators.required]),
    fullName: this.formBuilder.nonNullable.control('', [Validators.required]),
    email: this.formBuilder.nonNullable.control('', [Validators.required]),
    github: this.formBuilder.nonNullable.control('', [Validators.required]),
  });
}
