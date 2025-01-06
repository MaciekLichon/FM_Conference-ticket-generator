import { Component, inject, output, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe, NgIf, NgTemplateOutlet } from '@angular/common';

type Form = {
  avatar: FormControl<string>;
  fullName: FormControl<string>;
  email: FormControl<string>;
  github: FormControl<string>;
};

export type FormValue = {
  avatar: string;
  fullName: string;
  email: string;
  github: string;
};

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgTemplateOutlet, NgIf, JsonPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  private formBuilder = inject(NonNullableFormBuilder);

  isFormSubmitted = output<FormValue>();

  imageSrc = signal<string>('');

  form = this.formBuilder.group<Form>({
    avatar: this.formBuilder.control('', [Validators.required]),
    fullName: this.formBuilder.control('', [Validators.required]),
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    github: this.formBuilder.control('', [Validators.required]),
  });

  onSubmit(event: Event) {
    event.preventDefault();

    this.form.updateValueAndValidity();
    this.form.markAllAsTouched();

    if (this.form.valid) {
      const currentValue = this.form.getRawValue();
      currentValue.avatar = this.imageSrc();
      this.isFormSubmitted.emit(currentValue);
    }
  }

  uploadImage(event: Event) {
    const uploader = event.target as HTMLInputElement;
    if (uploader.files) {
      const uploadedImage = uploader.files[0];
      const imageURL = URL.createObjectURL(uploadedImage);
      this.imageSrc.set(imageURL);
    }
  }

  removeImage() {
    this.imageSrc.set('');
    this.form.get('avatar')?.reset();
  }

  get fullName() {
    return this.form.get('fullName') as FormControl;
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get github() {
    return this.form.get('github') as FormControl;
  }
}
