import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function fileSizeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const fileSize = (value as File).size;
    const maxSize = 10 * 1024;
    console.log(fileSize, maxSize);

    return fileSize > maxSize ? { fileSize: true } : null;
  };
}
